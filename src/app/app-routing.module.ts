import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppShellComponent } from "./app-shell/app-shell.component";
import { GamePageComponent } from "./components/game-page/game-page.component";
import { HowToPlayComponent } from "./components/how-to-play/how-to-play.component";
import { LeaderboardComponent } from "./components/leaderboard/leaderboard.component";
import { SettingsComponent } from "./components/settings/settings.component";

const routes: Routes = [
  {
    path: "",
    component: AppShellComponent,
    children: [
      { path: "", component: GamePageComponent },
      { path: "how-to-play", component: HowToPlayComponent },
      { path: "leaderboard", component: LeaderboardComponent },
      { path: "settings", component: SettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
