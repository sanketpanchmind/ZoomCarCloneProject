import { TestBed } from '@angular/core/testing';

import { GetAllLocationService } from './get-all-location.service';

describe('GetAllLocationService', () => {
  let service: GetAllLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
