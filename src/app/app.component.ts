import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
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
  countries: any;
  randomCountry: Country;
  form: FormGroup;
  filteredOptions: Observable<any[]>;
  guesses: any = [];
  currentGuess: any;

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

  arrayBufferToBase64(buffer:any ) {
    let binary = "";
    let bytes = new Uint8Array( buffer );
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
       binary += String.fromCharCode( bytes[i] );
    }
    return window.btoa(binary);
  }

  sanitize(url:string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  initForm() {
    this.form = new FormGroup({
      country: new FormControl(null)
    });
  }

  guessSubmit() {
    this.currentGuess = this.form.get("country")?.value;
    if (this.currentGuess == null || !this.countries.some((guess: any) => guess.country.toUpperCase().includes(this.currentGuess)))
    {
      this.matSnackBar.open("Unknown country", "", {
        verticalPosition: "top",
        duration: 1000
      });
    } else if (this.guesses.some((guess: any) => guess.country.toUpperCase().includes(this.form.get("country")?.value))) {
      this.matSnackBar.open("Country already guessed", "", {
        verticalPosition: "top",
        duration: 1000
      });
    } else {
      let findCountry = this.countries.find((guess: any) => guess.country.toUpperCase().includes(this.currentGuess));
      this.guesses.push(findCountry);
    }
    this.filteredOptions = this.form.get("country")!.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value)),
    );
    this.form.reset();

    if (this.guesses.length == 5) {
      let message = "THE ANSWER WAS: " + this.randomCountry.country?.toUpperCase();
      this.matSnackBar.open(message, "Close", {
        verticalPosition: "top"
      });
    } else if (this.currentGuess?.toUpperCase()  == this.randomCountry.country?.toUpperCase()) {
      let message = "CORRECT";
      this.matSnackBar.open(message, "Close", {
        verticalPosition: "top"
      });
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value?.toLowerCase();
    return this.countries.filter((option: any) => option.country?.toLowerCase().includes(filterValue));
  }

  getDistanceFromLatLonInKm(lat1: any, lon1: any, lat2: any, lon2: any) {
    let R = 6371; // Radius of the earth in km
    let dLat = this.toRadians(lat2-lat1);  // toRadians below
    let dLon = this.toRadians(lon2-lon1); 
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c; // Distance in km
    return Math.round(d);
  }

  private toRadians(deg: any) {
    return deg * (Math.PI/180)
  }

  private toDegrees(radians: any) {
  let pi = Math.PI;
  return radians * (180/pi);
  }

  calculateBearing(startLat: any, startLng: any, destLat: any, destLng: any) {
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

  calculateIconDirection(lat1: any, long1: any) {
    let degree = this.calculateBearing(this.randomCountry.location[0], this.randomCountry.location[1], lat1, long1, );
    return { 'transform': 'rotate('+degree+'deg)' }
  }

  playAgain() {
    let random = Math.floor(Math.random() * this.countries.length);
    this.randomCountry = this.countries[random];
    this.guesses = [];
    this.matSnackBar.dismiss();
  }
}


