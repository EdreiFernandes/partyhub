import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { Game } from '../../models/Game';

@Component({
  selector: 'app-games-list',
  imports: [MatDividerModule, MatListModule, MatButtonModule, RouterLink],
  templateUrl: './games-list.html',
  styleUrl: './games-list.css'
})
export class GamesList {
  games: Game[] = [
    new Game(1, "Quem sou eu?"),
    new Game(2, "Verdade ou desafio"),
    new Game(3, "Jogo da velha"),
  ];
}
