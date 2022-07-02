import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'maps-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.scss']
})
export class MapsHowToPlayComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closePage() {
    this.router.navigate(["/maps"]);
  }

}
