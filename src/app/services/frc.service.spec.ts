import { TestBed } from '@angular/core/testing';

import { FrcService } from './frc.service';

describe('FrcService', () => {
  let service: FrcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
