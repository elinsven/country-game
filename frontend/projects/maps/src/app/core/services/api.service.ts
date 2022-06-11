import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private _baseUrl: string = environment.baseUrl;
  private _apiUrl: string = this._baseUrl + "/getCountries";

  constructor(private http: HttpClient) { }

  public getCountries() {
    return this.http.get(this._apiUrl).pipe(
      map((data) => {
        return data;
      }),
    );
  }
}