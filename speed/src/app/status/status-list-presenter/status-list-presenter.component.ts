import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
