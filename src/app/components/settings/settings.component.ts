import { Component, OnInit } from "@angular/core";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  darkMode: string | null;

  constructor() {}

  ngOnInit(): void {
    this.darkMode = localStorage.getItem("DARK_MODE");
  }

  toggleDarkMode(event: MatSlideToggleChange) {
    const theme = "dark-theme";
    if (event.checked) {
      document.body.classList.add(theme);
      localStorage.setItem("DARK_MODE", "TRUE");
    } else {
      document.body.classList.remove(theme);
      localStorage.removeItem("DARK_MODE");
    }
  }
}
