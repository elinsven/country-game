import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from '../models/menuItem';

@Component({
  selector: 'lib-app-list',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LibLayoutComponent implements OnInit {
  @Input() menuItems: MenuItem[];
  @Output() pageChange = new EventEmitter<MenuItem>();

  constructor() { }

  ngOnInit(): void {
  }

}
