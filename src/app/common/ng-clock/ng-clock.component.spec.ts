import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClockComponent } from './ng-clock.component';

describe('NgClockComponent', () => {
  let component: NgClockComponent;
  let fixture: ComponentFixture<NgClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
