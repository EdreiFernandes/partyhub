import { inject, Injectable } from '@angular/core';
import { GameRepository } from '../database/game-repository';
import { GameModel } from '../models/GameModel';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameRepository = inject(GameRepository);

  getAllGames(): GameModel[] {
    return this.gameRepository.getAllGames();
  }

  getGameById(_id: number): GameModel | undefined {
    return this.gameRepository.getGameById(_id);
  }
}
