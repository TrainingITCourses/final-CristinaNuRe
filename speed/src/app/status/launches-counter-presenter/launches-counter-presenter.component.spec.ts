import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesCounterPresenterComponent } from './launches-counter-presenter.component';

describe('LaunchesCounterPresenterComponent', () => {
  let component: LaunchesCounterPresenterComponent;
  let fixture: ComponentFixture<LaunchesCounterPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesCounterPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesCounterPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
