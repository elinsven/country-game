import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from '../../models/menuItem';

/**
 * A unified layout for the app
 */

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class LibHeaderComponent implements OnInit {
  /**
   * Menu items for the navigation bar
   */
  @Input() menuItems: MenuItem[];
  /**
   * Eventemitter for changing page
   */
  @Output() pageChange = new EventEmitter<MenuItem>();

  constructor() { }

  ngOnInit(): void {
  }

}
