import { TestBed } from '@angular/core/testing';

import { ArrondServiceService } from './arrond-service.service';

describe('ArrondServiceService', () => {
  let service: ArrondServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrondServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
