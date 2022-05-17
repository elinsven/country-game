import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { CommonService } from "src/app/core/services/common.service";
import { Country } from "src/app/shared/models/models";

@Component({
  selector: "app-game-page",
  templateUrl: "./game-page.component.html",
  styleUrls: ["./game-page.component.scss"],
})
export class GamePageComponent implements OnInit {
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
    getRandomCountry
      ? (this.randomCountry = getRandomCountry)
      : (this.randomCountry = this.commonService.setRandomCountry(
        this.randomCountry,
      ));
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
