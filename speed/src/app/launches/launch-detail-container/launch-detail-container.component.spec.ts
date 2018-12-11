import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailContainerComponent } from './launch-detail-container.component';

describe('LaunchDetailContainerComponent', () => {
  let component: LaunchDetailContainerComponent;
  let fixture: ComponentFixture<LaunchDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
