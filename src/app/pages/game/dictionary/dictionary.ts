import { Component, signal, ViewChild, viewChildren } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PlayersList } from '../../../components/dictionary/players-list/players-list';
import { DictionaryGameStage } from '../../../interfaces/dictionary-game-stage';
import { WordSelector } from "../../../components/dictionary/word-selector/word-selector";

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
    WordSelector
],
  templateUrl: './dictionary.html',
  styleUrl: './dictionary.css',
})
export class Dictionary {
  @ViewChild(PlayersList) playerListComponent!: DictionaryGameStage;
  @ViewChild(WordSelector) wordSelectorComponent!: DictionaryGameStage;

  enum = GameStage;
  gameStage = signal(GameStage.SettingWord); //update do SettingPlayers

  nextStage() {
    switch (this.gameStage()) {
      case this.enum.SettingPlayers:
        if (this.playerListComponent?.canContinue()) {
          this.gameStage.set(this.enum.SettingWord); 
        }
        break;

      case this.enum.SettingWord:
        if (this.wordSelectorComponent?.canContinue()) {
          this.gameStage.set(this.enum.GivingMeaning);
        }
        break;

      case this.enum.GivingMeaning:
        this.gameStage.set(this.enum.Voting);
        break;

      case this.enum.Voting:
        this.gameStage.set(this.enum.ShowingResult);
        break;

      case this.enum.ShowingResult:
        this.gameStage.set(this.enum.SettingWord);
        break;
    }
  }
}
