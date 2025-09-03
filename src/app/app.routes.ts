import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { GameSummary } from './pages/game-summary/game-summary';
import { Headsup } from './pages/game/headsup/headsup';
import { Tictactoe } from './pages/game/tictactoe/tictactoe';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "summary/:gameId", component: GameSummary, pathMatch: 'full'},
    {path: "headsup", component: Headsup},
    {path: "tictactoe", component: Tictactoe}
];
