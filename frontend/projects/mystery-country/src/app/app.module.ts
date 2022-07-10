import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibHeaderModule } from 'projects/lib/components/header/header.module';
import { LibListModule } from 'projects/lib/components/list/list.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppShellComponent } from './core/components/app-shell/app-shell.component';
import { StartComponent } from './core/components/start/start.component';
import { MapsModule } from './maps/components/maps.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent,
    StartComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MapsModule,
    LibHeaderModule,
    LibListModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
