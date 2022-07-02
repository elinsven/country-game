import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../../../../../../lib/models/application';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  applications: Application[] = [];

  constructor(private router: Router) {
    this.applications = [
      {
        img: "https://picsum.photos/200",
        title: "MAPS",
        path: "/maps",
        playable: true
      },
      {
        img: "https://picsum.photos/200",
        title: "FLAGS",
        path: "/flags",
        playable: false
      }
    ]
  }

  ngOnInit(): void {
  }

  selectApplication(path: string) {
    this.router.navigate([path]);
  }

}
