import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
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
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  countries: Country[];
  randomCountry: Country;
  form: FormGroup;
  filteredOptions: Observable<Country[]>;
  guesses: any = [];
  currentGuess: string;

  constructor(private api: ApiService, private sanitizer: DomSanitizer, private matSnackBar: MatSnackBar) { }

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
     let random = Math.floor(Math.random() * this.countries.length);
     this.randomCountry = this.countries[random];

    }, err => {
      console.log(err);
    });
  }

  arrayBufferToBase64(buffer: any ) {
    let binary = "";
    let bytes = new Uint8Array( buffer );
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
       binary += String.fromCharCode( bytes[i] );
    }
    return window.btoa(binary);
  }

  sanitize(url: string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  initForm() {
    this.form = new FormGroup({
      country: new FormControl(null)
    });
  }

  guessSubmit() {
    this.currentGuess = this.form.get("country")?.value;

    if (this.currentGuess == null || !this.checkArray(this.countries, this.currentGuess)) {
      this.initMatSnackBar("Unknown country", "", 1000);
    } else if (this.checkArray(this.guesses, this.currentGuess)) {
      this.initMatSnackBar("Country already guessed", "", 1000);
    } else {
      let findCountry = this.countries.find((guess: Country) => guess.country.toUpperCase().includes(this.currentGuess));
      this.guesses.push(findCountry);
    }

    this.filteredOptions = this.form.get("country")!.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value)),
    );
    this.form.reset();

    let correctCountry = this.randomCountry.country.toUpperCase();
    if (this.guesses.length === 5) {
      this.initMatSnackBar(`THE ANSWER WAS ${correctCountry}`, "Close", undefined);
    } else if (this.currentGuess?.toUpperCase()  === correctCountry) {
      this.initMatSnackBar("CORRECT", "Close", undefined)
    }
  }

  private checkArray(array: any, value: string) {
    return array.some((guess: any) => guess.country.toUpperCase().includes(value));
  }

  private initMatSnackBar(message: string, closeButton: string, duration: number | undefined) {
    this.matSnackBar.open(message, closeButton, {
      verticalPosition: "top",
      duration: duration
    });
  }

  private _filter(value: string): Country[] {
    const filterValue = value?.toLowerCase();
    return this.countries.filter((option: Country) => option.country?.toLowerCase().includes(filterValue));
  }

  private toRadians(deg: number) {
    return deg * (Math.PI/180)
  }

  private toDegrees(radians: number) {
  let pi = Math.PI;
  return radians * (180/pi);
  }

  private calculateBearing(startLat: number, startLng: number, destLat: number, destLng: number) {
    startLat = this.toRadians(startLat);
    startLng = this.toRadians(startLng);
    destLat = this.toRadians(destLat);
    destLng = this.toRadians(destLng);
  
    let y = Math.sin(destLng - startLng) * Math.cos(destLat);
    let x = Math.cos(startLat) * Math.sin(destLat) -
          Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
    let brng = Math.atan2(y, x);
    brng = this.toDegrees(brng);
    return (brng + 360) % 360;
  }

  getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    let R = 6371;
    let dLat = this.toRadians(lat2-lat1);
    let dLon = this.toRadians(lon2-lon1); 
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c;
    return Math.round(d);
  }

  calculateIconDirection(lat1: number, long1: number) {
    let degree = this.calculateBearing(this.randomCountry.location[0], this.randomCountry.location[1], lat1, long1);
    return {"transform": `rotate(${degree}deg)`};
  }

  playAgain() {
    let random = Math.floor(Math.random() * this.countries.length);
    this.randomCountry = this.countries[random];
    this.guesses = [];
    this.matSnackBar.dismiss();
  }
}


