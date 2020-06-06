import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedEventsComponent } from './detailed-events.component';

describe('DetailedEventsComponent', () => {
  let component: DetailedEventsComponent;
  let fixture: ComponentFixture<DetailedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
