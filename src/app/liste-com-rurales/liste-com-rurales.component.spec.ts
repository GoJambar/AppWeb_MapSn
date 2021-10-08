import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeComRuralesComponent } from './liste-com-rurales.component';

describe('ListeComRuralesComponent', () => {
  let component: ListeComRuralesComponent;
  let fixture: ComponentFixture<ListeComRuralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeComRuralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeComRuralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
