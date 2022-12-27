import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirwatcherComponent } from './airwatcher.component';

describe('AirwatcherComponent', () => {
  let component: AirwatcherComponent;
  let fixture: ComponentFixture<AirwatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirwatcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirwatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
