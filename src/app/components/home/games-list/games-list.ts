import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { GameService } from '../../../sevices/game-sevice';
import { GameModel } from '../../../models/GameModel';

@Component({
  selector: 'app-games-list',
  imports: [MatDividerModule, MatListModule, MatButtonModule, RouterLink],
  templateUrl: './games-list.html',
  styleUrl: './games-list.css'
})
export class GamesList {
  gameService = inject(GameService);
  
  games: GameModel[] = this.gameService.getAllGames();
}
