import { Component, inject, OnInit } from '@angular/core';
import { Title } from '../../components/title/title';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GameModel } from '../../models/GameModel';
import { GameService } from '../../sevices/game-sevice';

@Component({
  selector: 'app-game-summary',
  imports: [Title, MatButton, RouterLink],
  templateUrl: './game-summary.html',
  styleUrl: './game-summary.css',
})
export class GameSummary implements OnInit {
  gameService = inject(GameService);
  game: GameModel | undefined;

  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    let idparam = this.route.snapshot.paramMap.get("gameId");
    if(idparam) this.game = this.gameService.getGameById(+idparam);
  }
}
