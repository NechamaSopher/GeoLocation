import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceDetailsComponent } from './distance-details.component';

describe('DistanceDetailsComponent', () => {
  let component: DistanceDetailsComponent;
  let fixture: ComponentFixture<DistanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
