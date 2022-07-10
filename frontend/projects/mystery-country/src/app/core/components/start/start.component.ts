import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../../../../../lib/models/game';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  games: Game[] = [];

  constructor(private router: Router) {
    this.games = [
      {
        img: "../../../../../../lib/assets/maps_game_icon.png",
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

  selectGame(game: Game) {
    this.router.navigate([game.path]);
  }

}
