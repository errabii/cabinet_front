import { TestBed } from '@angular/core/testing';

import { InfirmiereService } from './infirmiere.service';

describe('InfirmiereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfirmiereService = TestBed.get(InfirmiereService);
    expect(service).toBeTruthy();
  });
});
