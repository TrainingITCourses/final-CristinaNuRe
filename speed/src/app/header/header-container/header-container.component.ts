import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/store/global-state.reducer';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {

  public title: string= '';

  constructor(private store: Store<GlobalState>) { }

  ngOnInit() {
    this.store.select('globalState').subscribe((globalState: GlobalState) => {
      this.title = globalState.sectionTitle;
    });
  }
}
