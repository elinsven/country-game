import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatAutocompleteTrigger } from "@angular/material/autocomplete";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DomSanitizer } from "@angular/platform-browser";
import { map, Observable, startWith } from "rxjs";
import { ApiService } from "./services/api.service";

interface Country {
  country: string;
  countryimage: {
    data: number[],
    type: string
  }
  location: number[];
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger) trigger: MatAutocompleteTrigger;

  countries: Country[];
  randomCountry: Country;
  form: FormGroup;
  filteredOptions: Observable<Country[]>;
  guesses: any = [];
  currentGuess: string;
  gameWon: boolean = false;

  constructor(private api: ApiService, 
    private sanitizer: DomSanitizer, 
    private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getDataFromAPI();
    this.initForm();

    this.filteredOptions = this.form.get("country")!.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value)),
    );
  }

  getDataFromAPI() {
    this.api.getData().subscribe((res: any) => {   
     this.countries = res;
     this.countries.sort((a, b) => (a.country > b.country) ? 1 : -1);
     const random = Math.floor(Math.random() * this.countries.length);
     this.randomCountry = this.countries[random];
     console.log(this.randomCountry);

    }, err => {
      console.log(err);
    });
  }

  initForm() {
    this.form = new FormGroup({
      country: new FormControl(null)
    });
  }

  arrayBufferToBase64(buffer: any) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
       binary += String.fromCharCode( bytes[i] );
    }
    return window.btoa(binary);
  }

  sanitize(url: string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  guessSubmit() {
    this.currentGuess = this.form.get("country")?.value;

    if (this.currentGuess == null || !this.checkArray(this.countries, this.currentGuess)) {
      this._initMatSnackBar("Unknown country", "", 1000);
    } else if (this.checkArray(this.guesses, this.currentGuess)) {
      this._initMatSnackBar("Country already guessed", "", 1000);
    } else {
      const regexCurrentGuess = new RegExp("(^|\s)" + this.currentGuess + "(\s|$)");
      const findCountry = this.countries.find((guess: Country) => guess.country.toUpperCase().match(regexCurrentGuess));
      this.guesses.push(findCountry);
    }

    this.filteredOptions = this.form.get("country")!.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value)),
    );
    this.form.reset();

    const correctCountry = this.randomCountry.country.toUpperCase();
    if (this.guesses.length === 5 && this.currentGuess?.toUpperCase() !== correctCountry) {
      this._initMatSnackBar(`THE ANSWER WAS ${correctCountry}`, "Close", undefined);
      this.form.controls["country"].disable();
    } else if (this.currentGuess?.toUpperCase()  === correctCountry) {
      this._initMatSnackBar("CORRECT", "Close", undefined);
      this.form.controls["country"].disable();
      this.gameWon = true;
    }
  }

  getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371;
    const dLat = this._toRadians(lat2-lat1);
    const dLon = this._toRadians(lon2-lon1); 
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this._toRadians(lat1)) * Math.cos(this._toRadians(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c;
    return Math.round(d);
  }

  calculateIconDirection(lat1: number, long1: number) {
    const degree = this._calculateBearing(this.randomCountry.location[0], this.randomCountry.location[1], lat1, long1);
    return {"transform": `rotate(${degree}deg)`};
  }

  playAgain() {
    const random = Math.floor(Math.random() * this.countries.length);
    this.randomCountry = this.countries[random];
    this.guesses = [];
    this.matSnackBar.dismiss();
    this.form.controls["country"].enable();
  }

  private checkArray(array: any, value: string) {
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

  private _toRadians(deg: number) {
    return deg * (Math.PI/180)
  }

  private _toDegrees(radians: number) {
  const pi = Math.PI;
  return radians * (180/pi);
  }

  private _calculateBearing(startLat: number, startLng: number, destLat: number, destLng: number) {
    startLat = this._toRadians(startLat);
    startLng = this._toRadians(startLng);
    destLat = this._toRadians(destLat);
    destLng = this._toRadians(destLng);
  
    const y = Math.sin(destLng - startLng) * Math.cos(destLat);
    const x = Math.cos(startLat) * Math.sin(destLat) -
          Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
    let brng = Math.atan2(y, x);
    brng = this._toDegrees(brng);
    return (brng + 360) % 360;
  }
}


