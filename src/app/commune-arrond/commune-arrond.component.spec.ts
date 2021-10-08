import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneArrondComponent } from './commune-arrond.component';

describe('CommuneArrondComponent', () => {
  let component: CommuneArrondComponent;
  let fixture: ComponentFixture<CommuneArrondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuneArrondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuneArrondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
