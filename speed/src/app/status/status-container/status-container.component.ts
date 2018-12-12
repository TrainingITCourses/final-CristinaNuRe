import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { LoadStatus } from '../store/status.actions';

@Component({
  selector: 'app-status-container',
  templateUrl: './status-container.component.html',
  styleUrls: ['./status-container.component.css']
})
export class StatusContainerComponent implements OnInit {

  public status;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loadAllStatus();
  }

  private loadAllStatus() {
    console.log('Se carga lista de estados');
    this.store.dispatch(new LoadStatus());
  }
}
