import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanjoseWeatherComponent } from './sanjose-weather.component';

describe('SanjoseWeatherComponent', () => {
  let component: SanjoseWeatherComponent;
  let fixture: ComponentFixture<SanjoseWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanjoseWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanjoseWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
