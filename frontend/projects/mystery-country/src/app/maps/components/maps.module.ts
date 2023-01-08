import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { LibHeaderModule } from "projects/lib/components/header/header.module";
import { LibProgressSpinnerModule } from "projects/lib/components/progress-spinner/progress-spinner.module";
import { TranslocoRootModule } from "../../transloco-root.module";
import { MapsAppShellComponent } from "./app-shell/app-shell.component";
import { GamesComponent } from "./games/games.component";
import { MapsGamePageComponent } from "./game-page/game-page.component";
import { MapsGuessingFormComponent } from "./game-page/guessing-form/guessing-form.component";
import { MapsGuessingListComponent } from "./game-page/guessing-list/guessing-list.component";
import { MapsHowToPlayComponent } from "./how-to-play/how-to-play.component";
import { MapsLeaderboardComponent } from "./leaderboard/leaderboard.component";
import { MapsSettingsComponent, MapsSettingsDialog } from "./settings/settings.component";
import { MatSelectModule } from '@angular/material/select';
import { LibSettingsModule } from "projects/lib/components/settings/settings.module";

@NgModule({
  declarations: [
    MapsAppShellComponent,
    GamesComponent,
    MapsHowToPlayComponent,
    MapsLeaderboardComponent,
    MapsSettingsComponent,
    MapsSettingsDialog,
    MapsGamePageComponent,
    MapsGuessingFormComponent,
    MapsGuessingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    TranslocoRootModule,
    LibHeaderModule,
    LibProgressSpinnerModule,
    LibSettingsModule
  ],
  providers: [],
})
export class MapsModule { }
