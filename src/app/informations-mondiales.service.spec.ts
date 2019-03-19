import { TestBed } from '@angular/core/testing';

import { InformationsMondialesService } from './informations-mondiales.service';

describe('InformationsMondialesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationsMondialesService = TestBed.get(InformationsMondialesService);
    expect(service).toBeTruthy();
  });
});
