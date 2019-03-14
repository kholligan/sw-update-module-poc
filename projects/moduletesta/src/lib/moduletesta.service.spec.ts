import { TestBed } from '@angular/core/testing';

import { ModuletestaService } from './moduletesta.service';

describe('ModuletestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuletestaService = TestBed.get(ModuletestaService);
    expect(service).toBeTruthy();
  });
});
