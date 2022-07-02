import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'maps-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class MapsApplicationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closePage() {
    this.router.navigate(["/maps"]);
  }

}
