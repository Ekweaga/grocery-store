import { TestBed } from '@angular/core/testing';

import { DukaService } from './duka.service';

describe('DukaService', () => {
  let service: DukaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DukaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
