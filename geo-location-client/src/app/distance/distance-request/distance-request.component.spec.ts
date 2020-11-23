import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceRequestComponent } from './distance-request.component';

describe('DistanceRequestComponent', () => {
  let component: DistanceRequestComponent;
  let fixture: ComponentFixture<DistanceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistanceRequestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
