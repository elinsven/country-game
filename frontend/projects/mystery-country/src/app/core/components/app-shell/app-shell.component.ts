import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "projects/lib/models/menuItem";
import { Theme } from "../../../../../../lib/models/theme";

@Component({
  selector: "main-app-shell",
  templateUrl: "./app-shell.component.html",
  styleUrls: ["./app-shell.component.scss"]
})
export class AppShellComponent implements OnInit {
  appTitle = "MYSTERY COUNTRY"; //Transloco
  menuItems: MenuItem[] = [];

  constructor(private router: Router) {
    this.menuItems = [
      {
        path: "/settings",
        title: "Settings",
        icon: "settings",
        ariaLabel: "To the 'Settings' page"
      }
    ]
  }

  ngOnInit(): void {
    this.getTheme();
  }

  getTheme() {
    const theme = localStorage.getItem("THEME");
    theme === Theme.DARK_THEME ? this.setTheme(Theme.DARK_THEME, "dark-theme") : null;
  }

  setTheme(value: Theme, addTheme: string) {
    localStorage.setItem("THEME", value);
    document.body.classList.add(addTheme);
  }

  translateMenuItem() {
    //transloco
  }

  pageChange(path: string) {
    this.router.navigate([path]);
  }
}