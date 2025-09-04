import { GameModel } from "../models/GameModel";

const games: GameModel[] = [
  new GameModel(1, 'Quem sou eu?'),
  new GameModel(2, 'Verdade ou desafio'),
  new GameModel(3, 'Jogo da velha'),
];

export class GameRepository {
  getAllGames(): GameModel[] {
    return games;
  }
}