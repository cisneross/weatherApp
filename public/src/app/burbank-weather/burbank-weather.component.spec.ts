import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurbankWeatherComponent } from './burbank-weather.component';

describe('BurbankWeatherComponent', () => {
  let component: BurbankWeatherComponent;
  let fixture: ComponentFixture<BurbankWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurbankWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurbankWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
