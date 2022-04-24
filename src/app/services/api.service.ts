import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map } from "rxjs";

export interface Country {
  country: string;
  countryimage: {
    data: number[];
    type: string;
  };
  location: number[];
}

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private baseUrl: string = environment.baseUrl;
  private apiUrl: string = this.baseUrl + "/getCountries";
  private gameData: Object;

  constructor(private http: HttpClient) {}

  public getCountries() {
    return this.http.get(this.apiUrl).pipe(
      map((data) => {
        return data;
      }),
    );
  }

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
