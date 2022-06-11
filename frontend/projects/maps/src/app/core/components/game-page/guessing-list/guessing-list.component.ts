import { Component, Input, OnInit } from "@angular/core";
import { Country } from "projects/maps/src/app/shared/models/country";
import { GameState } from "projects/maps/src/app/shared/models/game-state";

@Component({
  selector: "app-guessing-list",
  templateUrl: "./guessing-list.component.html",
  styleUrls: ["./guessing-list.component.scss"],
})
export class GuessingListComponent implements OnInit {
  @Input() gameState: GameState;
  @Input() guesses: Country[];
  @Input() randomCountry: Country;

  distance: number;
  get state(): typeof GameState {
    return GameState;
  }

  constructor() { }

  ngOnInit(): void { }

  getBackgroundColor(guess: Country): string {
    this.distance = this.getDistanceFromLatLonInKm(guess.location[0], guess.location[1])
    if (this.distance < 3000) {
      return "green"
    } else if (this.distance <= 10000) {
      return "yellow"
    } else {
      return "red"
    }
  }

  getDistanceFromLatLonInKm(startLat: number, startLng: number) {
    const R = 6371;
    const dLat = this.toRadians(this.randomCountry.location[0] - startLat);
    const dLon = this.toRadians(this.randomCountry.location[1] - startLng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(startLat)) *
      Math.cos(this.toRadians(this.randomCountry.location[0])) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    return Math.round(d);
  }

  calculateIconDirection(startLat: number, startLng: number) {
    const deg = this.calculateBearing(startLat, startLng, this.randomCountry.location[0], this.randomCountry.location[1]);
    return { transform: `rotate(${deg}deg)` };
  }

  calculateBearing(startLat: number, startLng: number, destLat: number, destLng: number) {
    startLat = this.toRadians(startLat);
    startLng = this.toRadians(startLng);
    destLat = this.toRadians(destLat);
    destLng = this.toRadians(destLng);

    let dLon = destLng - startLng;
    const x = Math.tan(destLat / 2 + Math.PI / 4);
    const y = Math.tan(startLat / 2 + Math.PI / 4);
    const dPhi = Math.log(x / y);
    if (Math.abs(dLon) > Math.PI) {
      if (dLon > 0.0) {
        dLon = -(2 * Math.PI - dLon);
      } else {
        dLon = 2 * Math.PI + dLon;
      }
    }

    let targetBearing = (this.toDegree(Math.atan2(dLon, dPhi)) + 360) % 360;
    return targetBearing;
  }

  toRadians(deg: number) {
    return deg * (Math.PI / 180);
  }

  toDegree(deg: number) {
    return deg * (180 / Math.PI);
  }
}