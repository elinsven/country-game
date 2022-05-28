import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { TranslocoRootModule } from "./transloco-root.module";
import { SettingsComponent, SettingsDialog } from "./core/components/settings/settings.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { AppShellComponent } from "./shared/components/app-shell/app-shell.component";
import { LeaderboardComponent } from "./core/components/leaderboard/leaderboard.component";
import { HowToPlayComponent } from "./core/components/how-to-play/how-to-play.component";
import { GamePageModule } from "./core/components/game-page/game-page.module";

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    AppShellComponent,
    LeaderboardComponent,
    HowToPlayComponent,
    SettingsDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    TranslocoRootModule,
    GamePageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
