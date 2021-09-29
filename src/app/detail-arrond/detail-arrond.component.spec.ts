import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArrondComponent } from './detail-arrond.component';

describe('DetailArrondComponent', () => {
  let component: DetailArrondComponent;
  let fixture: ComponentFixture<DetailArrondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArrondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArrondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
