import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'maps-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class MapsLeaderboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closePage() {
    this.router.navigate(["/maps"]);
  }

}
