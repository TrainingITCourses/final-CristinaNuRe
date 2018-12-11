import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailPresenterComponent } from './launch-detail-presenter.component';

describe('LaunchDetailPresenterComponent', () => {
  let component: LaunchDetailPresenterComponent;
  let fixture: ComponentFixture<LaunchDetailPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchDetailPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
