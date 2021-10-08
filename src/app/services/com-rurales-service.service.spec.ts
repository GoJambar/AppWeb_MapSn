import { TestBed } from '@angular/core/testing';

import { ComRuralesServiceService } from './com-rurales-service.service';

describe('ComRuralesServiceService', () => {
  let service: ComRuralesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComRuralesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
