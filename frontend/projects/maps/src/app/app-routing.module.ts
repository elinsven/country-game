import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './core/components/app-shell/app-shell.component';
import { ApplicationsComponent } from './core/components/applications/applications.component';
import { GamePageComponent } from './core/components/game-page/game-page.component';
import { HowToPlayComponent } from './core/components/how-to-play/how-to-play.component';
import { LeaderboardComponent } from './core/components/leaderboard/leaderboard.component';
import { SettingsComponent } from './core/components/settings/settings.component';

const routes: Routes = [
  {
    path: "",
    component: AppShellComponent,
    children: [
      { path: "", component: GamePageComponent },
      { path: "how-to-play", component: HowToPlayComponent },
      { path: "applications", component: ApplicationsComponent },
      { path: "leaderboard", component: LeaderboardComponent },
      { path: "settings", component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
