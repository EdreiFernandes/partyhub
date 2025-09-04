import { GameRepository } from '../database/game-repository';
import { GameModel } from '../models/GameModel';

export class GameService {
  getAllGames(): GameModel[] {
    return new GameRepository().getAllGames();
  }
}
