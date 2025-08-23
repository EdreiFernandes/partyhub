import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { GameSummary } from './pages/game-summary/game-summary';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "summary/:gameId", component: GameSummary, pathMatch: 'full'}
];
