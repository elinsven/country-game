import { Component, OnInit } from "@angular/core";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { Theme } from "src/app/shared/models/models";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  darkTheme: string | null;
  get theme(): typeof Theme {
    return Theme;
  }

  constructor() { }

  ngOnInit(): void {
    this.darkTheme = localStorage.getItem("THEME");
  }

  toggleDarkMode(event: MatSlideToggleChange) {
    event.checked
      ? this.setTheme(Theme.DARK_THEME, "dark-theme", "light-theme")
      : this.setTheme(Theme.LIGHT_THEME, "light-theme", "dark-theme");
  }

  setTheme(value: Theme, addTheme: string, removeTheme: string) {
    localStorage.setItem("THEME", value);
    document.body.classList.add(addTheme);
    document.body.classList.remove(removeTheme);
  }
}
