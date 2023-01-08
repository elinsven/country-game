import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Setting } from 'projects/lib/models/setting';
import { Theme } from 'projects/lib/models/theme';

@Component({
  selector: 'lib-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class LibSettingsComponent implements OnInit {
  @Input() settings: Setting[] = [];
  @Input() darkMode: boolean = true;
  @Output() toggleChange = new EventEmitter();

  currentTheme: Theme | string | null;
  get theme(): typeof Theme {
    return Theme;
  }

  constructor() { }

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem("THEME");
  }

  dakrModeToggle(event: MatSlideToggleChange) {
    if (event.checked) {
      localStorage.setItem("THEME", Theme.DARK_THEME);
      document.body.classList.add("dark-theme");
    } else {
      localStorage.removeItem("THEME");
      document.body.classList.remove("dark-theme");
    }
  }

}
