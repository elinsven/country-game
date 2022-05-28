import { Injectable } from "@angular/core";
import { Continent, Country } from "src/app/shared/models/models";
import * as crypto from "crypto-js";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  private _allCountries: Country[];
  private _countries: Country[];
  private _secretKey = "6GHEI985FNKEN9";

  constructor() { }

  public setCountries(countries: Country[]) {
    this._allCountries = countries;
    this._countries = countries;
    this._countries = this.filterCountriesByContinent(localStorage.getItem("CONTINENT"));
  }

  public filterCountriesByContinent(continent: Continent | string | null): Country[] {
    if (continent === "All continents") {
      this._countries = this._allCountries;
      return this._countries;
    } else {
      this._countries = this._allCountries.filter(country => country.continent === continent);
      return this._countries;
    }
  }

  public getCountries(): Country[] {
    return this._countries;
  }

  public generateRandomCountry(): Country {
    const random = Math.floor(Math.random() * this._countries.length);
    const randomCountry = this._countries[random];
    const encryptCountry = this._encrypt(randomCountry.country);
    const encryptContinent = this._encrypt(randomCountry.continent);
    randomCountry.country = encryptCountry;
    randomCountry.continent = encryptContinent;
    localStorage.setItem("RANDOM_COUNTRY", JSON.stringify(randomCountry));

    const decryptCountry = this.decrypt(randomCountry.country);
    const decryptContinent: any = this.decrypt(randomCountry.continent);
    randomCountry.country = decryptCountry;
    randomCountry.continent = decryptContinent;
    console.log("Decrypt: ", randomCountry)

    return randomCountry;
  }

  public decrypt(itemToDecrypt: any) {
    return crypto.AES.decrypt(itemToDecrypt, this._secretKey.trim()).toString(
      crypto.enc.Utf8,
    );
  }

  private _encrypt(value: any): any {
    return crypto.AES.encrypt(value, this._secretKey.trim()).toString();
  }
}
