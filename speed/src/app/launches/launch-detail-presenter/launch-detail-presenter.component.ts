import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch-detail-presenter',
  templateUrl: './launch-detail-presenter.component.html',
  styleUrls: ['./launch-detail-presenter.component.css']
})
export class LaunchDetailPresenterComponent implements OnInit {

  @Input() public launch;

  constructor() { }

  ngOnInit() {
  }

}
