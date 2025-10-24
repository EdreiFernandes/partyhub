import { Injectable } from "@angular/core";
import { GameModel } from "../models/GameModel";

const games: GameModel[] = [
  new GameModel(1, 'Quem sou eu?', 'psychology', 'Adivinhe o personagem na sua testa fazendo perguntas! Divertido jogo de adivinhação para grupos.', '🎯 OBJETIVO: Adivinhar o personagem, celebridade ou objeto que está na sua testa fazendo perguntas para os outros jogadores.\n\n🎮 COMO JOGAR:\n1. Um jogador coloca o celular na testa com a tela virada para os outros\n2. Os outros jogadores veem o nome/personagem na tela\n3. O jogador da testa faz perguntas de SIM/NÃO para adivinhar\n4. Exemplos: "Sou uma pessoa famosa?", "Sou um animal?", "Sou de um filme?"\n5. Os outros respondem apenas SIM ou NÃO\n6. Tempo limite: 1-2 minutos por rodada\n\n💡 DICAS:\n• Comece com perguntas gerais (pessoa, animal, objeto)\n• Depois seja mais específico (gênero, época, área)\n• Use a lógica para eliminar possibilidades\n• Divirta-se e seja criativo!\n\n👥 JOGADORES: 2 ou mais pessoas\n⏱️ DURAÇÃO: 5-15 minutos por rodada', '/headsup'),
  new GameModel(2, 'Jogo da velha', 'grid_on', 'Clássico jogo de estratégia! Seja o primeiro a formar uma linha de 3 símbolos iguais.', '🎯 OBJETIVO: Ser o primeiro a formar uma linha de 3 símbolos iguais (horizontal, vertical ou diagonal).\n\n🎮 COMO JOGAR:\n1. O tabuleiro é uma grade 3x3\n2. Jogadores alternam colocando X ou O\n3. Um jogador usa X, o outro usa O\n4. Vence quem conseguir 3 símbolos em linha\n5. Se o tabuleiro encher sem vencedor, é empate\n\n💡 ESTRATÉGIAS:\n• Sempre bloqueie o oponente quando ele tiver 2 em linha\n• Tente criar múltiplas ameaças ao mesmo tempo\n• O centro é a posição mais valiosa\n• Cantos são melhores que bordas\n\n👥 JOGADORES: 2 pessoas\n⏱️ DURAÇÃO: 1-5 minutos por partida', '/tictactoe'),
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