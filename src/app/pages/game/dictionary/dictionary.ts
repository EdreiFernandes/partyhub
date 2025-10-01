import { Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';

export interface DictionaryData {
  playersQuantity: string;
  tip: string;
}

enum GameStage {
  SettingWord,
  GivingMeaning,
  Voting,
  ShowingResult,
}

@Component({
  selector: 'app-dictionary',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './dictionary.html',
  styleUrl: './dictionary.css',
})
export class Dictionary {
  readonly playerQuantity = new FormControl('', [
    Validators.required,
    Validators.min(3),
  ]);

  readonly word = new FormControl('', [Validators.required]);
  errorMessagePlayerQuantity = signal('');
  errorMessageWord = signal('');
  wordMeaning = signal('');

  enum = GameStage;

  gameStage = signal(GameStage.SettingWord);

  constructor() {
    merge(this.playerQuantity.statusChanges, this.playerQuantity.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessagePlayerQuantity());

    merge(this.word.statusChanges, this.word.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageWord());
  }

  updateErrorMessagePlayerQuantity() {
    if (this.playerQuantity.hasError('required')) {
      this.errorMessagePlayerQuantity.set('You must enter a number');
    } else if (this.playerQuantity.hasError('min')) {
      this.errorMessagePlayerQuantity.set('You need 3 or more players');
    } else {
      this.errorMessagePlayerQuantity.set('');
    }
  }

  updateErrorMessageWord() {
    if (this.word.hasError('required')) {
      this.errorMessageWord.set('You must enter a number');
    } else {
      this.errorMessageWord.set('');
    }
  }

  nextStage() {
    switch (this.gameStage()) {
      case this.enum.SettingWord:
        if (
          this.playerQuantity.value &&
          this.word.value &&
          this.errorMessagePlayerQuantity().length == 0 &&
          this.errorMessageWord().length == 0
        ) {
          this.getMeaning().then(() => {
            if (this.wordMeaning().length) {
              this.gameStage.set(this.enum.GivingMeaning);
            }
          });
        }
        break;

      case this.enum.GivingMeaning:
        this.gameStage.set(this.enum.Voting);
        break;

      case this.enum.Voting:
        this.gameStage.set(this.enum.ShowingResult);
        break;

      case this.enum.ShowingResult:
        this.word.reset();
        this.playerQuantity.reset();
        this.gameStage.set(this.enum.SettingWord);
        break;
    }
  }

  async getMeaning(): Promise<any> {
    const request = new Request(
      'https://api.dicionario-aberto.net/word/' + this.word.value,
      {
        method: 'GET',
      }
    );

    const res = await fetch(request);
    const res_1 = await res.json();
    return this.wordMeaning.set(res_1[0].xml);
  }

  clickEvent(event: MouseEvent) {
    const request = new Request('https://api.dicionario-aberto.net/random', {
      method: 'GET',
    });

    fetch(request)
      .then((res) => res.json())
      .then((res) => this.word.setValue(res.word));

    event.stopPropagation();
  }
}
