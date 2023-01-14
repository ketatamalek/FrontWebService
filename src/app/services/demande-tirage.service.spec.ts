import { TestBed } from '@angular/core/testing';

import { DemandeTirageService } from './demande-tirage.service';

describe('DemandeTirageService', () => {
  let service: DemandeTirageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeTirageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
