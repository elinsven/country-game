import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TranslocoService } from "@ngneat/transloco";
import { map, Observable, startWith } from "rxjs";
import { Country } from "src/app/services/api.service";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-guessing-form",
  templateUrl: "./guessing-form.component.html",
  styleUrls: ["./guessing-form.component.scss"],
})
export class GuessingFormComponent implements OnInit {
  @Input() countries: Country[];
  @Input() randomCountry: Country;
  @Output() playAgain: EventEmitter<Country> = new EventEmitter<Country>();

  guessingForm: FormGroup;
  inputData: string;
  filteredOptions: Observable<Country[]>;
  recentGuess: string;
  guesses: any;
  gameStatus: "Won" | "InProgress" = "InProgress";

  constructor(
    private matSnackBar: MatSnackBar,
    private transloco: TranslocoService,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.guesses = this.dataService.getGuesses();
    this.initForm();
    this._autoCompletion();
  }

  initForm() {
    this.guessingForm = new FormGroup({
      country: new FormControl(null),
    });
  }

  onSubmitGuess() {
    if (this.guessingForm.controls["country"]?.value !== null) {
      this.recentGuess =
        this.guessingForm.controls["country"]?.value.toUpperCase();
    }
    const correctCountry = this.randomCountry.country.toUpperCase();

    if (!this._checkArray(this.countries, this.recentGuess)) {
      this._initMatSnackBar(
        this.transloco.translate("app.unknownCountry"),
        "",
        1000,
      );
    } else if (this._checkArray(this.guesses, this.recentGuess)) {
      this._initMatSnackBar(
        this.transloco.translate("app.countryAlreadyGuessed"),
        "",
        1000,
      );
    } else {
      const regexCurrentGuess = new RegExp(
        "(^|s)" + this.recentGuess + "(s|$)",
      );
      const findCountry = this.countries.find((guess: Country) =>
        guess.country.toUpperCase().match(regexCurrentGuess),
      );
      //localStorage.setItem("GUESSES", JSON.stringify(this.guessesTest));
      this.dataService.setGuesses(findCountry);
    }

    if (this.guesses.length === 5 && this.recentGuess !== correctCountry) {
      this._initMatSnackBar(
        this.transloco.translate("app.theAnswerWas") + correctCountry,
        this.transloco.translate("app.close"),
        undefined,
      );
      this.guessingForm.controls["country"].disable();
    } else if (this.recentGuess === correctCountry) {
      this._initMatSnackBar(
        this.transloco.translate("app.correct"),
        this.transloco.translate("app.close"),
        undefined,
      );
      this.guessingForm.controls["country"].disable();
      this.gameStatus = "Won";
    }
    this._autoCompletion();
    //this.guessesTest = JSON.parse(localStorage.getItem("GUESSES") as any);
    this.guesses = this.dataService.getGuesses();
    this.guessingForm.reset();
  }

  onPlayAgain() {
    this.setRandomCountry();
    this.guesses = this.dataService.clearGuesses();
    localStorage.removeItem("GUESSES");
    this.matSnackBar.dismiss();
    this.guessingForm.controls["country"].enable();
    this.gameStatus = "InProgress";
  }

  setRandomCountry() {
    const random = Math.floor(Math.random() * this.countries.length);
    this.randomCountry = this.countries[random];
    localStorage.setItem("RANDOM_COUNTRY", JSON.stringify(this.randomCountry));
    this.playAgain.emit(this.randomCountry);
  }

  private _autoCompletion() {
    this.filteredOptions = this.guessingForm.controls[
      "country"
    ].valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value)),
    );
  }

  private _checkArray(array: any, value: string) {
    const regex = new RegExp("(^|s)" + value + "(s|$)");
    return array.some((guess: any) => guess.country.toUpperCase().match(regex));
  }

  private _initMatSnackBar(
    message: string,
    closeButton: string,
    duration: number | undefined,
  ) {
    this.matSnackBar.open(message, closeButton, {
      verticalPosition: "top",
      duration: duration,
    });
  }

  private _filter(value: string): Country[] {
    const filterValue = value?.toLowerCase();
    return this.countries.filter(
      (option: any) => option.country.toLowerCase().indexOf(filterValue) === 0,
    );
  }
}
