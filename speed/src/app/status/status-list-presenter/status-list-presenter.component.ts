import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-list-presenter',
  templateUrl: './status-list-presenter.component.html',
  styleUrls: ['./status-list-presenter.component.css']
})
export class StatusListPresenterComponent implements OnInit {

  @Input() public statusList: any[];

  constructor() { }

  ngOnInit() {
  }

}
