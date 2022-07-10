import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'maps-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closePage() {
    this.router.navigate(["/maps"]);
  }

}
