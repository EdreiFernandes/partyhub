import { Component } from '@angular/core';
import { GamesList } from '../../components/games-list/games-list';
import { Title } from "../../components/title/title";

@Component({
  selector: 'app-home',
  imports: [GamesList, Title],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
