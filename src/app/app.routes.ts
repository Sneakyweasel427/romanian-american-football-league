import { Routes } from '@angular/router';
import {TeamComponent} from "./components/team/team.component";

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadComponent: () =>
      import("./components/team/team.component")
        .then((m) => m.TeamComponent),
  },
  {
    path: 'player-info/:id',
    loadComponent: () =>
      import("./components/player-info/player-info.component")
        .then((m) => m.PlayerInfoComponent),
  },
];
