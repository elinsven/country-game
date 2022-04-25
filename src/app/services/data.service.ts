import { Injectable } from "@angular/core";
import { Country } from "./api.service";

export interface GameData {
  countries: Country[];
  randomCountry: Country;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  private gameData: GameData;

  constructor() {}

  public setGameData(countries: Country[], randomCountry: Country) {
    this.gameData = {
      countries: countries,
      randomCountry: randomCountry,
    };
  }

  public getGameData(): Object {
    return this.gameData;
  }
}
