import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamesList } from './games-list/games-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GamesList, MatSlideToggleModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('partyhub');
}
