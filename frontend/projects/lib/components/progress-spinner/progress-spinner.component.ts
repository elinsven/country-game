import { Component, Input, OnInit } from '@angular/core';

/**
 * A progress spinner with text, indicating if something is loading
 */

@Component({
  selector: 'lib-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class LibProgressSpinnerComponent implements OnInit {
  /**
   * If spinner is visible
   */
  @Input() isLoading: boolean = false;
  /**
   * Size of the spinner
   */
  @Input() diameter: number = 100;
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
