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
  baseUrl: string = environment.baseUrl;
  apiUrl: string = this.baseUrl + "/getCountries";

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(this.apiUrl).pipe(
      map((data) => {
        return data;
      }),
    );
  }
}
