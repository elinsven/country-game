import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ApiService, Country } from "src/app/services/api.service";
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
  ) {}

  ngOnInit(): void {
    let data: any = this.dataService.getGameData();
    this.countries = data.countries;
    this.randomCountry = data.randomCountry;
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
