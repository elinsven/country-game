import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"

})

export class ApiService {
  baseUrl: string = environment.baseUrl;
  apiUrl: string = this.baseUrl + "/getCountries";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }
}
