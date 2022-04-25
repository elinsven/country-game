import { Component, OnInit } from "@angular/core";
import { ApiService, Country } from "../services/api.service";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-app-shell",
  templateUrl: "./app-shell.component.html",
  styleUrls: ["./app-shell.component.scss"],
})
export class AppShellComponent implements OnInit {
  countries: Country[];
  randomCountry: Country;

  constructor(private api: ApiService, private dataService: DataService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.api.getCountries().subscribe((res: any) => {
      this.countries = res;
      const random = Math.floor(Math.random() * this.countries.length);
      this.randomCountry = this.countries[random];
      this.dataService.setGameData(this.countries, this.randomCountry);
    });
  }
}
