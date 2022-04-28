import { Injectable } from "@angular/core";
import { Country } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private countries: Country[];
  private guesses: any[] = [];

  constructor() {}

  public setCountries(countries: Country[]) {
    this.countries = countries;
  }

  public getCountries(): Country[] {
    return this.countries;
  }

  public setGuesses(guess: any) {
    this.guesses.push(guess);
  }

  public clearGuesses() {
    return (this.guesses = []);
  }

  public getGuesses(): Object {
    return this.guesses;
  }
}
