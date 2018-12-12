import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { LoadStatus } from '../store/status.actions';
import { StatusState } from '../store/status.reducer';

@Component({
  selector: 'app-status-container',
  templateUrl: './status-container.component.html',
  styleUrls: ['./status-container.component.css']
})
export class StatusContainerComponent implements OnInit {

  public status: any[];

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loadAllStatus();

    this.store.select('status').subscribe((statusState: StatusState) => {
      this.status = statusState.allStatus;
    });
  }

  private loadAllStatus() {
    this.store.dispatch(new LoadStatus());
    console.log('Se carga lista de estados');
  }
}
