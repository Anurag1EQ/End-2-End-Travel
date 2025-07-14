import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainGoogleMapComponent } from './train-google-map.component';

describe('TrainGoogleMapComponent', () => {
  let component: TrainGoogleMapComponent;
  let fixture: ComponentFixture<TrainGoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainGoogleMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
