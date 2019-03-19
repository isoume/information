import { TestBed } from '@angular/core/testing';

import { InformationsCulturellesService } from './informations-culturelles.service';

describe('InformationsCulturellesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationsCulturellesService = TestBed.get(InformationsCulturellesService);
    expect(service).toBeTruthy();
  });
});
