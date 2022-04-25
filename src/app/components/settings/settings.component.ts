import { Component, OnInit } from "@angular/core";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggleDarkMode(event: MatSlideToggleChange) {
    const theme = "dark-theme";
    event.checked
      ? document.body.classList.add(theme)
      : document.body.classList.remove(theme);
    localStorage.setItem("DARK_MODE", "TRUE");
  }
}
