import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusDetailContainerComponent } from './status-detail-container.component';

describe('StatusDetailContainerComponent', () => {
  let component: StatusDetailContainerComponent;
  let fixture: ComponentFixture<StatusDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
