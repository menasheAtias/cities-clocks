import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesClocksComponent } from './cities-clocks.component';

describe('CitiesClocksComponent', () => {
  let component: CitiesClocksComponent;
  let fixture: ComponentFixture<CitiesClocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesClocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesClocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
