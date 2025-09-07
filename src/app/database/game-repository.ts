import { Injectable } from "@angular/core";
import { GameModel } from "../models/GameModel";

const games: GameModel[] = [
  new GameModel(1, 'Quem sou eu?', 'poem na testa e faz pergunta', '/headsup'),
  new GameModel(2, 'Jogo da velha', 'joga da veia', '/tictactoe'),
];

@Injectable({
  providedIn: 'root',
})
export class GameRepository {
  getAllGames(): GameModel[] {
    return games;
  }

  getGameById(_id: number): GameModel | undefined {
    return games.find(game => game.id == _id);
  }
}