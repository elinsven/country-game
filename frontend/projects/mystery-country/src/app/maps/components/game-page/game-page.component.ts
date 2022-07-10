import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Country } from "../../../shared/models/country";
import { CommonService } from "../../services/common.service";

@Component({
  selector: "maps-game-page",
  templateUrl: "./game-page.component.html",
  styleUrls: ["./game-page.component.scss"],
})
export class MapsGamePageComponent implements OnInit {
  countries: Country[];
  randomCountry: Country;

  constructor(
    private commonService: CommonService,
    private sanitizer: DomSanitizer,
  ) {
    this.countries = this.commonService.getCountries();
  }

  ngOnInit(): void {
    const getRandomCountry = JSON.parse(
      localStorage.getItem("RANDOM_COUNTRY") as string,
    );
    getRandomCountry ? this.randomCountry = this.decryptCountry(getRandomCountry) :
      this.randomCountry = this.commonService.generateRandomCountry();
  }

  decryptCountry(randomCountry: any) {
    const decryptedCountry = this.commonService.decrypt(randomCountry.country);
    randomCountry.country = decryptedCountry;
    return randomCountry;
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
