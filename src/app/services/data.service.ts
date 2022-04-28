import { Injectable } from "@angular/core";
import { Country } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private countries: Country[];

  constructor() {}

  public setCountries(countries: Country[]) {
    this.countries = countries;
  }

  public getCountries(): Country[] {
    return this.countries;
  }
}
