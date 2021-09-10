import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneRuralesComponent } from './commune-rurales.component';

describe('CommuneRuralesComponent', () => {
  let component: CommuneRuralesComponent;
  let fixture: ComponentFixture<CommuneRuralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuneRuralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuneRuralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
