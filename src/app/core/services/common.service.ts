import { Injectable } from "@angular/core";
import { Country } from "src/app/shared/models/models";
import * as crypto from "crypto-js";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  private countries: Country[];
  private secretKey = "6GHEI985FNKEN9";

  constructor() {}

  public setCountries(countries: Country[]) {
    this.countries = countries;
  }

  public getCountries(): Country[] {
    return this.countries;
  }

  public setRandomCountry(randomCountry: Country): Country {
    const random = Math.floor(Math.random() * this.countries.length);
    randomCountry = this.countries[random];
    const encryptCountry = this.encrypt(randomCountry.country);
    randomCountry.country = encryptCountry;
    localStorage.setItem("RANDOM_COUNTRY", JSON.stringify(randomCountry));
    return randomCountry;
  }

  public encrypt(value: string): string {
    return crypto.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  public decrypt(textToDecrypt: string) {
    return crypto.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(
      crypto.enc.Utf8,
    );
  }
}
