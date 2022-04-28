import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Country } from "src/app/services/api.service";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-game-page",
  templateUrl: "./game-page.component.html",
  styleUrls: ["./game-page.component.scss"],
})
export class GamePageComponent implements OnInit {
  countries: Country[];
  randomCountry: Country;

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
  ) {
    this.countries = this.dataService.getCountries();
  }

  ngOnInit(): void {
    const getRandomCountry = JSON.parse(
      localStorage.getItem("RANDOM_COUNTRY") as string,
    );
    getRandomCountry
      ? (this.randomCountry = getRandomCountry)
      : this.setRandomCountry();
  }

  setRandomCountry() {
    const random = Math.floor(Math.random() * this.countries.length);
    this.randomCountry = this.countries[random];
    localStorage.setItem("RANDOM_COUNTRY", JSON.stringify(this.randomCountry));
  }

  arrayBufferToBase64(buffer: any) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  playAgain(newCountry: Country) {
    this.randomCountry = newCountry;
  }
}
