import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {
  MatAutocompleteModule,
  MatAutocompleteTrigger,
} from "@angular/material/autocomplete";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { GuessingFormComponent } from "./core/components/game-page/guessing-form/guessing-form.component";
import { TranslocoRootModule } from "./transloco-root.module";
import { SettingsComponent } from "./core/components/settings/settings.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { GuessingListComponent } from "./core/components/game-page/guessing-list/guessing-list.component";
import { AppShellComponent } from "./shared/components/app-shell/app-shell.component";
import { GamePageComponent } from "./core/components/game-page/game-page.component";
import { LeaderboardComponent } from "./core/components/leaderboard/leaderboard.component";
import { HowToPlayComponent } from "./core/components/how-to-play/how-to-play.component";

@NgModule({
  declarations: [
    AppComponent,
    GuessingFormComponent,
    GuessingListComponent,
    SettingsComponent,
    AppShellComponent,
    GamePageComponent,
    LeaderboardComponent,
    HowToPlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    TranslocoRootModule,
  ],
  providers: [MatAutocompleteTrigger],
  bootstrap: [AppComponent],
})
export class AppModule { }
