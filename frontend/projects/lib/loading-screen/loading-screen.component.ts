import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LibLoadingScreenComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() loadingText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
