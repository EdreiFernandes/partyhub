import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { GameModel } from '../../models/GameModel';
import { GameService } from '../../sevices/game-sevice';

@Component({
  selector: 'app-games-list',
  imports: [MatDividerModule, MatListModule, MatButtonModule, RouterLink],
  templateUrl: './games-list.html',
  styleUrl: './games-list.css'
})
export class GamesList {
  games: GameModel[] = new GameService().getAllGames();
}
