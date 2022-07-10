import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../../models/game';

/**
 * A common navigation list holding all the games
 */

@Component({
  selector: 'lib-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class LibListComponent implements OnInit {
  /**
   * Array holding all the games and their information
   */
  @Input() games: Game[] = [];
  /**
   * Eventemitter for selecting game
   */
  @Output() gameSelect = new EventEmitter<Game>();

  constructor() { }

  ngOnInit(): void {
  }
}
