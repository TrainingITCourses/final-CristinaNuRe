import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-counter-presenter',
  templateUrl: './launches-counter-presenter.component.html',
  styleUrls: ['./launches-counter-presenter.component.css']
})
export class LaunchesCounterPresenterComponent implements OnInit {

  @Input() public launchesCount;

  constructor() { }

  ngOnInit() {
  }

}
