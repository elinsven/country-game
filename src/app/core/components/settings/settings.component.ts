import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { Continent, Theme } from "src/app/shared/models/models";
import { CommonService } from "../../services/common.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  form: FormGroup;
  currentTheme: Theme | string | null;
  get theme(): typeof Theme {
    return Theme;
  }
  continents: string[] = [
    "All continents",
    "Africa",
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Australia/Oceania",
    "Antarctica"
  ]

  constructor(private commonService: CommonService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem("THEME");

    this.initForm();
    this.changeContinent();
  }

  initForm() {
    this.form = new FormGroup({
      continent: new FormControl(localStorage.getItem("CONTINENT") || "All continents")
    })
  }

  toggleDarkMode(event: MatSlideToggleChange) {
    event.checked ? this.setTheme(Theme.DARK_THEME, "dark-theme", "light-theme") :
      this.setTheme(Theme.LIGHT_THEME, "light-theme", "dark-theme");
  }

  setTheme(value: Theme, addTheme: string, removeTheme: string) {
    localStorage.setItem("THEME", value);
    document.body.classList.add(addTheme);
    document.body.classList.remove(removeTheme);
  }

  changeContinent() {
    this.form.get("continent")?.valueChanges.subscribe(change => {
      if (localStorage.getItem("GUESSES") === null) {
        this.filterCountries(change);
      } else {
        const dialog = this.dialog.open(SettingsDialog);
        dialog.afterClosed().subscribe(result => {
          result ? this.filterCountries(change) :
            this.form.get("continent")?.setValue(localStorage.getItem("CONTINENT"), { emitEvent: false });
        });
      }
    })
  }

  filterCountries(continent: Continent) {
    this.commonService.filterCountriesByContinent(continent);
    this.commonService.generateRandomCountry();
    localStorage.setItem("CONTINENT", continent);
    if (localStorage.getItem("GUESSES")) {
      localStorage.removeItem("GUESSES");
    }
  }
}

@Component({
  selector: "app-settings-dialog",
  templateUrl: "settings-dialog.html",
})
export class SettingsDialog { }
