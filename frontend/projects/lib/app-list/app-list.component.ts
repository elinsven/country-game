import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../models/application';

@Component({
  selector: 'lib-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class LibAppListComponent implements OnInit {
  @Input() applications: Application[] = [];
  @Output() applicationSelect = new EventEmitter<Application>();

  constructor() { }

  ngOnInit(): void {
  }
}
