import { Component, OnInit, Input } from '@angular/core';

@Component({
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
