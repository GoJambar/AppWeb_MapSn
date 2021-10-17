import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommunesComponent } from './liste-communes.component';

describe('ListeCommunesComponent', () => {
  let component: ListeCommunesComponent;
  let fixture: ComponentFixture<ListeCommunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCommunesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCommunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
