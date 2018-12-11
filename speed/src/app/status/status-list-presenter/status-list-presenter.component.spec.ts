import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusListPresenterComponent } from './status-list-presenter.component';

describe('StatusListPresenterComponent', () => {
  let component: StatusListPresenterComponent;
  let fixture: ComponentFixture<StatusListPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusListPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
