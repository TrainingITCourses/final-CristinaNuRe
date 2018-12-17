import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/store/global-state.reducer';
import { LoadSectionTitle } from 'src/app/store/global-state.actions';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {

  private title: string;

  constructor(private store: Store<GlobalState>) { }

  ngOnInit() {
    this.loadTitle();

    this.store.select('globalState').subscribe((globalState: GlobalState) => {
      this.title = globalState.sectionTitle;
    });
  }

  private loadTitle() {
    this.store.dispatch(new LoadSectionTitle());
  }

}
