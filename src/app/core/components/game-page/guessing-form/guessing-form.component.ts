import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TranslocoService } from "@ngneat/transloco";
import { map, Observable, startWith } from "rxjs";
import { CommonService } from "src/app/core/services/common.service";
import { Country, GameStatus } from "src/app/shared/models/models";

@Component({
  selector: "app-guessing-form",
  templateUrl: "./guessing-form.component.html",
  styleUrls: ["./guessing-form.component.scss"],
})
export class GuessingFormComponent implements OnInit, OnDestroy {
  @Input() countries: Country[];
  @Input() randomCountry: Country;
  @Output() playAgain: EventEmitter<Country> = new EventEmitter<Country>();

  guessingForm: FormGroup;
  inputData: string;
  filteredOptions: Observable<Country[]>;
  recentGuess: string;
  guesses: Country[] = [];
  gameStatus: GameStatus = GameStatus.IN_PROGRESS;
  get status(): typeof GameStatus {
    return GameStatus;
  }

  constructor(
    private matSnackBar: MatSnackBar,
    private transloco: TranslocoService,
    private commonService: CommonService,
  ) {
    const getGuesses = JSON.parse(localStorage.getItem("GUESSES") as string);
    getGuesses ? (this.guesses = getGuesses) : (this.guesses = []);
  }

  ngOnInit(): void {
    this.initForm();
    this.autoCompletion();

    window.onbeforeunload = () => this.ngOnDestroy();
  }

  initForm() {
    this.guessingForm = new FormGroup({
      country: new FormControl(null),
    });
  }

  onSubmitGuess() {
    this.recentGuess =
      this.guessingForm.controls["country"]?.value.toUpperCase();
    const correctCountry = this.randomCountry.country.toUpperCase();

    if (!this.checkArray(this.countries, this.recentGuess)) {
      this.initMatSnackBar(this.transloco.translate("app.unknownCountry"), "", 1000);
    } else if (this.checkArray(this.guesses, this.recentGuess)) {
      this.initMatSnackBar(this.transloco.translate("app.countryAlreadyGuessed"), "", 1000);
    } else {
      const regexCurrentGuess = new RegExp(
        "(^|s)" + this.recentGuess + "(s|$)",
      );
      const findCountry = this.countries.find((guess: Country) =>
        guess.country.toUpperCase().match(regexCurrentGuess),
      );
      this.guesses.push(findCountry as Country);
      localStorage.setItem("GUESSES", JSON.stringify(this.guesses));
    }

    if (this.guesses.length === 5 && this.recentGuess !== correctCountry) {
      this.gameEnd("app.theAnswerWas", GameStatus.LOST, correctCountry);
    } else if (this.recentGuess === correctCountry) {
      this.gameEnd("app.correct", GameStatus.WON, "");
    }
    this.autoCompletion();
    this.guesses = JSON.parse(localStorage.getItem("GUESSES") as string);
    this.guessingForm.reset();
  }

  onPlayAgain() {
    this.randomCountry = this.commonService.generateRandomCountry();
    this.playAgain.emit(this.randomCountry);
    this.resetGuesses();
    this.matSnackBar.dismiss();
    this.guessingForm.controls["country"].enable();
    this.guessingForm.reset();
    this.gameStatus = GameStatus.IN_PROGRESS;
  }

  gameEnd(notificationMessage: string, gameStatus: GameStatus, correctCountry?: string) {
    this.initMatSnackBar(
      this.transloco.translate(notificationMessage) + correctCountry,
      this.transloco.translate("app.close"),
      undefined
    );
    this.guessingForm.controls["country"].disable();
    this.gameStatus = gameStatus;
  }

  resetGuesses() {
    localStorage.removeItem("GUESSES");
    this.guesses = [];
  }

  autoCompletion() {
    this.filteredOptions = this.guessingForm.controls["country"].valueChanges.pipe(
      startWith(""),
      map((value) => this.filter(value)),
    );
  }

  checkArray(array: Country[], value: string) {
    const regex = new RegExp("(^|s)" + value + "(s|$)");
    return array.some((guess: Country) =>
      guess.country.toUpperCase().match(regex),
    );
  }

  initMatSnackBar(message: string, closeButton: string, duration: number | undefined) {
    this.matSnackBar.open(message, closeButton, {
      verticalPosition: "top",
      duration: duration,
    });
  }

  filter(value: string): Country[] {
    const filterValue = value?.toLowerCase();
    return this.countries.filter((option: Country) =>
      option.country.toLowerCase().indexOf(filterValue) === 0,
    );
  }

  ngOnDestroy(): void {
    if (this.gameStatus === GameStatus.WON || this.gameStatus === GameStatus.LOST) {
      this.commonService.generateRandomCountry();
      this.resetGuesses();
    }
  }
}
