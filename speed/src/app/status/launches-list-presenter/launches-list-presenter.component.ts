import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-list-presenter',
  templateUrl: './launches-list-presenter.component.html',
  styleUrls: ['./launches-list-presenter.component.css']
})
export class LaunchesListPresenterComponent implements OnInit {

  @Input() public launchesList;
  @Output() public sortLaunchesAsc = new EventEmitter();
  @Output() public sortLaunchesDesc = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
