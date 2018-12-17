import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-list-presenter',
  templateUrl: './launches-list-presenter.component.html',
  styleUrls: ['./launches-list-presenter.component.css']
})
export class LaunchesListPresenterComponent implements OnInit {

  @Input() public launchesList;

  constructor() { }

  ngOnInit() {
  }

}
