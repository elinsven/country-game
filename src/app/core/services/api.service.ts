import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private baseUrl: string = environment.baseUrl;
  private apiUrl: string = this.baseUrl + "/getCountries";

  constructor(private http: HttpClient) {}

  public getCountries() {
    return this.http.get(this.apiUrl).pipe(
      map((data) => {
        return data;
      }),
    );
  }
}
