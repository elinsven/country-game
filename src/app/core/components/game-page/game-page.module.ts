import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { GamePageComponent } from './game-page.component';
import { GuessingFormComponent } from './guessing-form/guessing-form.component';
import { GuessingListComponent } from './guessing-list/guessing-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    GamePageComponent,
    GuessingFormComponent,
    GuessingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSnackBarModule,
    TranslocoRootModule
  ]
})
export class GamePageModule { }
