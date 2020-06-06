import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleEventsComponent } from './simple-events.component';

describe('EventsComponent', () => {
  let component: SimpleEventsComponent;
  let fixture: ComponentFixture<SimpleEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
