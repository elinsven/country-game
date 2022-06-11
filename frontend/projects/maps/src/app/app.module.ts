import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LibLayoutModule } from "projects/lib/layout/layout.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppShellComponent } from "./core/components/app-shell/app-shell.component";
import { HowToPlayComponent } from "./core/components/how-to-play/how-to-play.component";
import { SettingsComponent, SettingsDialog } from "./core/components/settings/settings.component";
import { LeaderboardComponent } from "./core/components/leaderboard/leaderboard.component";
import { ApplicationsComponent } from "./core/components/applications/applications.component";
import { TranslocoRootModule } from "./transloco-root.module";
import { MatDividerModule } from "@angular/material/divider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { AppGamePageModule } from "./core/components/game-page/game-page.module";
import { LibLoadingScreenModule } from "projects/lib/loading-screen/loading-screen.module";

@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent,
    HowToPlayComponent,
    SettingsComponent,
    SettingsDialog,
    LeaderboardComponent,
    ApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslocoRootModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatSlideToggleModule,
    AppGamePageModule,
    LibLayoutModule,
    LibLoadingScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
