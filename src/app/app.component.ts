import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ApiService, Country } from "./services/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  countries: Country[];
  randomCountry: Country;

  constructor(private api: ApiService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.api.getCountries().subscribe((res: any) => {
      this.countries = res;
      const random = Math.floor(Math.random() * this.countries.length);
      this.randomCountry = this.countries[random];
    });
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
