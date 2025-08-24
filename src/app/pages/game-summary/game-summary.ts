import { Component, OnInit } from '@angular/core';
import { Title } from '../../components/title/title';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-summary',
  imports: [Title, MatButton, RouterLink],
  templateUrl: './game-summary.html',
  styleUrl: './game-summary.css',
})
export class GameSummary implements OnInit {
  id: string = "";

  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    let idparam = this.route.snapshot.paramMap.get("gameId");
    if(idparam) this.id = idparam;
  }
}
