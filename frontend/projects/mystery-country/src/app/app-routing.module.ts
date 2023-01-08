import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './core/components/app-shell/app-shell.component';
import { StartComponent } from './core/components/start/start.component';
import { MapsAppShellComponent } from './maps/components/app-shell/app-shell.component';
import { GamesComponent } from './maps/components/games/games.component';
import { MapsGamePageComponent } from './maps/components/game-page/game-page.component';
import { MapsHowToPlayComponent } from './maps/components/how-to-play/how-to-play.component';
import { MapsLeaderboardComponent } from './maps/components/leaderboard/leaderboard.component';
import { MapsSettingsComponent } from './maps/components/settings/settings.component';
import { SettingsComponent } from './core/components/settings/settings.component';

const routes: Routes = [
  {
    path: "", component: AppShellComponent, children: [
      { path: "", component: StartComponent },
      { path: "settings", component: SettingsComponent },
    ]
  },
  {
    path: "maps", component: MapsAppShellComponent, children: [
      { path: "", component: MapsGamePageComponent },
      { path: "how-to-play", component: MapsHowToPlayComponent },
      { path: "leaderboard", component: MapsLeaderboardComponent },
      { path: "games", component: GamesComponent },
      { path: "settings", component: MapsSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
