import { Component, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DictionaryGameStage } from '../../../interfaces/dictionary-game-stage';

@Component({
  selector: 'app-players-list',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule],
  templateUrl: './players-list.html',
  styleUrl: './players-list.css'
})
export class PlayersList implements DictionaryGameStage {
  minimumPlayers: number = 3;
  canContinue = signal<boolean>(false);
  playersList = signal<string[]>([]);

  readonly playerName = new FormControl('', [
    Validators.required,
  ]);

  addPlayer() {
    if (this.newPlayerIsValid()) {
      const playerNameValue = this.playerName.value?.trim() as string;

      this.playersList.update(players => [...players, playerNameValue]);
      this.playerName.reset();
      
      this.setCanContinue();
    }
  }

  newPlayerIsValid(): boolean {
    const playerNameValue = this.playerName.value?.trim();

    if(!playerNameValue) return false;

    const playerExists = this.playersList().some(
      player => player.toLocaleLowerCase().trim() === playerNameValue.toLocaleLowerCase()
    );

    return !playerExists;
  }

  setCanContinue(){
    this.canContinue.set(this.playersList().length >= this.minimumPlayers);
  }

  removePlayer(player: string) {
    this.playersList.update(players => players.filter(p => p !== player));
    this.setCanContinue();
  }
}
