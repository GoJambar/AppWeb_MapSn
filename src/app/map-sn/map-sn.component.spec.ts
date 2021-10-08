import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSnComponent } from './map-sn.component';

describe('MapSnComponent', () => {
  let component: MapSnComponent;
  let fixture: ComponentFixture<MapSnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
