import { TestBed } from '@angular/core/testing';

import { InformationsFinancieresService } from './informations-financieres.service';

describe('InformationsFinancieresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationsFinancieresService = TestBed.get(InformationsFinancieresService);
    expect(service).toBeTruthy();
  });
});
