import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, startWith } from 'rxjs';
import { Country } from 'src/app/services/api.service';

@Component({
  selector: 'app-guessing-form',
  templateUrl: './guessing-form.component.html',
  styleUrls: ['./guessing-form.component.scss']
})
export class GuessingFormComponent implements OnInit {
  @Input() countries: Country[];
  @Input() randomCountry: Country;
  @Output() playAgain: EventEmitter<Country> = new EventEmitter<Country>();

  guessingForm: FormGroup;
  inputData: string;
  filteredOptions: Observable<Country[]>;
  recentGuess: string;
  guesses: any[] = [];
  gameStatus: "Won" | "InProgress" = "InProgress";

  constructor(private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
    this.autoCompletion();
  }

  initForm() {
    this.guessingForm = new FormGroup({
      country: new FormControl("")
    });
  }

  onSubmitGuess() {
    this.recentGuess = this.guessingForm.controls["country"]?.value.toUpperCase();

    if (this.recentGuess == null || !this._checkArray(this.countries, this.recentGuess)) {
      this._initMatSnackBar("Unknown country", "", 1000);

    } else if (this._checkArray(this.guesses, this.recentGuess)) {
      this._initMatSnackBar("Country already guessed", "", 1000);

    } else {
      const regexCurrentGuess = new RegExp("(^|\s)" + this.recentGuess + "(\s|$)");
      const findCountry = this.countries.find((guess: Country) => guess.country.toUpperCase().match(regexCurrentGuess));
      this.guesses.push(findCountry);
    }

    this.autoCompletion();
    this.guessingForm.reset();

    const correctCountry = this.randomCountry.country.toUpperCase();
    if (this.guesses.length === 5 && this.recentGuess?.toUpperCase() !== correctCountry) {
      this._initMatSnackBar(`THE ANSWER WAS ${correctCountry}`, "Close", undefined);
      this.guessingForm.controls["country"].disable();

    } else if (this.recentGuess?.toUpperCase()  === correctCountry) {
      this._initMatSnackBar("CORRECT", "Close", undefined);
      this.guessingForm.controls["country"].disable();
      this.gameStatus = "Won";
    }
  }

  onPlayAgain() {
    const random = Math.floor(Math.random() * this.countries.length);
    this.randomCountry = this.countries[random];
    this.playAgain.emit(this.randomCountry);
    this.guesses = [];
    this.matSnackBar.dismiss();
    this.guessingForm.controls["country"].enable();
    this.gameStatus = "InProgress";
  }

  autoCompletion() {
    this.filteredOptions = this.guessingForm.controls["country"].valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value)),
    );
  }

  private _checkArray(array: any, value: string) {
    const regex = new RegExp("(^|\s)" + value + "(\s|$)");
    return array.some((guess: any) => guess.country.toUpperCase().match(regex));
  }

  private _initMatSnackBar(message: string, closeButton: string, duration: number | undefined) {
    this.matSnackBar.open(message, closeButton, {
      verticalPosition: "top",
      duration: duration
    });
  }

  private _filter(value: string): Country[] {
    const filterValue = value?.toLowerCase();
    return this.countries.filter((option: any) => option.country.toLowerCase().indexOf(filterValue) === 0);
  }

}
