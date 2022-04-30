import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../../core/services/api.service";
import { CommonService } from "../../../core/services/common.service";
import { Country, Theme } from "../../models/models";

@Component({
  selector: "app-app-shell",
  templateUrl: "./app-shell.component.html",
  styleUrls: ["./app-shell.component.scss"],
})
export class AppShellComponent implements OnInit {
  countries: Country[];
  randomCountry: Country;

  constructor(private api: ApiService, private commonService: CommonService) {}

  ngOnInit(): void {
    this.getCountries();
    this.getTheme();
  }

  getCountries() {
    this.api.getCountries().subscribe((res: any) => {
      this.countries = res;
      this.commonService.setCountries(this.countries);
    });
  }

  getTheme() {
    const theme = localStorage.getItem("THEME");
    switch (theme) {
      case Theme.LIGHT_THEME:
        this.setTheme(Theme.LIGHT_THEME, "light-theme");
        break;
      case Theme.DARK_THEME:
        this.setTheme(Theme.DARK_THEME, "dark-theme");
        break;
      default:
        this.setTheme(Theme.LIGHT_THEME, "light-theme");
    }
  }

  setTheme(value: Theme, addTheme: string) {
    localStorage.setItem("THEME", value);
    document.body.classList.add(addTheme);
  }
}
