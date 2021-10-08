import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDepartComponent } from './detail-depart.component';

describe('DetailDepartComponent', () => {
  let component: DetailDepartComponent;
  let fixture: ComponentFixture<DetailDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
