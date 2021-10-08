import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArrondComponent } from './liste-arrond.component';

describe('ListeArrondComponent', () => {
  let component: ListeArrondComponent;
  let fixture: ComponentFixture<ListeArrondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeArrondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeArrondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
