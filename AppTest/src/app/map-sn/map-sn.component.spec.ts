import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSNComponent } from './map-sn.component';

describe('MapSNComponent', () => {
  let component: MapSNComponent;
  let fixture: ComponentFixture<MapSNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
