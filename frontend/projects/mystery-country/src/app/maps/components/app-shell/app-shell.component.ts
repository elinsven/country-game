import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'projects/lib/models/menuItem';
import { Country } from 'projects/mystery-country/src/app/shared/models/country';
import { Theme } from 'projects/mystery-country/src/app/shared/models/theme';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';
import { menuData } from './menu-data';

@Component({
  selector: 'maps-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class MapsAppShellComponent implements OnInit {
  countries: Country[];
  randomCountry: Country;
  menuItems: MenuItem[];

  constructor(
    private api: ApiService,
    private commonService: CommonService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCountries();
    this.getTheme();
    this.setupMenu();
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

  setupMenu() {
    this.menuItems = menuData;
  }

  translateMenuItem() {

  }

  pageChange(menuItem: MenuItem) {
    this.router.navigate([menuItem.path]);
  }


}
