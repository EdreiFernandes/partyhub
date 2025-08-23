import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-games-list',
  imports: [MatDividerModule, MatListModule, MatButtonModule],
  templateUrl: './games-list.html',
  styleUrl: './games-list.css'
})
export class GamesList {
  Games: String[] = [
    "Quem sou eu?",
    "Verdade ou desafio",
    "Jogo da velha"
  ];

  chooseGame(game: String) {
    alert("Open: " + game);
  }
}
