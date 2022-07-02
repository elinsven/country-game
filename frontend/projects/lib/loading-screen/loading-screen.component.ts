import { Component, Input, OnInit } from '@angular/core';

/**
 * A progress spinner with text, indicating if something is loading
 */

@Component({
  selector: 'lib-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LibLoadingScreenComponent implements OnInit {
  /**
   * If spinner is visible
   */
  @Input() isLoading: boolean = false;
  /**
   * Text under spinner
   */
  @Input() loadingText: string;
  /**
   * Color of the spinner
   */
  @Input() spinnerColor: "primary" | "accent" = "primary";

  constructor() { }

  ngOnInit(): void {
  }

}
