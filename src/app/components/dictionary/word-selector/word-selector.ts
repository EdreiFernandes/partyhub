import { Component, signal, Signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { DictionaryGameStage } from '../../../interfaces/dictionary-game-stage';

@Component({
  selector: 'app-word-selector',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './word-selector.html',
  styleUrl: './word-selector.css'
})
export class WordSelector implements DictionaryGameStage {
  isValidWord = signal<boolean>(false);
  
  readonly word = new FormControl('', [
    Validators.required,
  ]);

  constructor() {
    this.word.valueChanges.subscribe(() => {
      this.validateWord();
    })
    
  }

  getRandomWord() {
    const request = new Request('https://api.dicionario-aberto.net/random', {
      method: 'GET',
    });

    fetch(request)
      .then((res) => res.json())
      .then((res) => this.word.setValue(res.word));
  }

  async getMeaning(): Promise<any> {
    console.log("Get meaning");
    const wordValue = this.word.value?.trim();
    const request = new Request(
      'https://api.dicionario-aberto.net/word/' + wordValue,
      {
        method: 'GET',
      }
    );

    const res = await fetch(request);
    const res_1 = await res.json();
    return res_1[0].xml;
  }

  async validateWord(): Promise<void> {
    const wordValue = this.word.value?.trim();
    
    this.isValidWord.set(false);
    if (!wordValue) return;

    const meaning = await this.getMeaning();
    if (meaning.length > 0) {
      this.isValidWord.set(true);
    }
  }

  canContinue(): boolean {
    return this.isValidWord();
  }
}
