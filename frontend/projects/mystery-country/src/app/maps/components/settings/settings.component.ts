import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Continent } from "../../../shared/models/continent";
import { CommonService } from "../../services/common.service";

@Component({
  selector: "maps-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class MapsSettingsComponent implements OnInit {
  form: FormGroup;
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

  constructor(
    private router: Router,
    private commonService: CommonService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.changeContinent();
  }

  closePage() {
    this.router.navigate(["/maps"]);
  }

  initForm() {
    this.form = new FormGroup({
      continent: new FormControl(localStorage.getItem("CONTINENT") || "All continents")
    })
  }

  changeContinent() {
    this.form.get("continent")?.valueChanges.subscribe(change => {
      if (localStorage.getItem("GUESSES") === null) {
        this.filterCountries(change);
      } else {
        const dialog = this.dialog.open(MapsSettingsDialog);
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
  selector: "maps-settings-dialog",
  templateUrl: "settings-dialog.html",
})
export class MapsSettingsDialog { }