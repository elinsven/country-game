import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/services/api.service';

@Component({
  selector: 'app-guessing-list',
  templateUrl: './guessing-list.component.html',
  styleUrls: ['./guessing-list.component.scss']
})
export class GuessingListComponent implements OnInit {
  @Input() gameStatus: "Won" | "InProgress";
  @Input() guesses: Country[];
  @Input() randomCountry: Country;

  constructor() { }

  ngOnInit(): void {
  }

  getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371;
    const dLat = this._toRadians(lat2-lat1);
    const dLon = this._toRadians(lon2-lon1); 
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this._toRadians(lat1)) * Math.cos(this._toRadians(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c;
    return Math.round(d);
  }
  
  calculateIconDirection(lat1: number, long1: number) {
    const degree = this._calculateBearing(lat1, long1, this.randomCountry.location[0], this.randomCountry.location[1]);
    return {"transform": `rotate(${degree}deg)`};
  }

  private _toRadians(deg: number) {
    return deg * (Math.PI/180);
  }

  private _toDegree(deg: number) {
    return deg * (180 / Math.PI);
  }

  private _calculateBearing(startLat: number, startLng: number, destLat: number, destLng: number) {
    startLat = this._toRadians(startLat);
    startLng = this._toRadians(startLng);
    destLat = this._toRadians(destLat);
    destLng = this._toRadians(destLng);

    let dLon = destLng - startLng;
    const x = Math.tan(destLat / 2 + Math.PI / 4);
    const y = Math.tan(startLat / 2 + Math.PI / 4);
    const dPhi = Math.log(x / y);
    if (Math.abs(dLon) > Math.PI) {
        if (dLon > 0.0) {
            dLon = -(2 * Math.PI - dLon);
        } else {
            dLon = (2 * Math.PI + dLon);
        }
    }

    let targetBearing = (this._toDegree(Math.atan2(dLon, dPhi)) + 360) % 360;
    return targetBearing;
  }
}
