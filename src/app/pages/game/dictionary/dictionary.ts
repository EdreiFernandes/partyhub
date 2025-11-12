import { Component, signal, ViewChild } from '@angular/core';
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
import { PlayersList } from '../../../components/dictionary/players-list/players-list';
import { DictionaryGameStage } from '../../../interfaces/dictionary-game-stage';

export interface DictionaryData {
  playersQuantity: string;
  tip: string;
}

enum GameStage {
  SettingPlayers,
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
    PlayersList,
  ],
  templateUrl: './dictionary.html',
  styleUrl: './dictionary.css',
})
export class Dictionary {
  @ViewChild(PlayersList) playerListComponent!: DictionaryGameStage;

  readonly word = new FormControl('', [Validators.required]);
  errorMessageWord = signal('');
  wordMeaning = signal('');

  enum = GameStage;

  gameStage = signal(GameStage.SettingPlayers);

  constructor() {
    merge(this.word.statusChanges, this.word.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageWord());
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
      case this.enum.SettingPlayers:
        if (this.playerListComponent?.canContinue()) {
          this.gameStage.set(this.enum.SettingWord); 
        }
        break;      
      case this.enum.SettingWord:
        if (
          this.word.value &&
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
