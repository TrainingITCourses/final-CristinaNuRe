import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesListPresenterComponent } from './launches-list-presenter.component';

describe('LaunchesListPresenterComponent', () => {
  let component: LaunchesListPresenterComponent;
  let fixture: ComponentFixture<LaunchesListPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesListPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
