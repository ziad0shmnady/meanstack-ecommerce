import { TestBed } from '@angular/core/testing';

import { ApitestService } from './Api.service';

describe('ApitestService', () => {
  let service: ApitestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApitestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
