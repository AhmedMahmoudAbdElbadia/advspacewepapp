import { TestBed, inject } from '@angular/core/testing';

import { AdvspaceService } from './advspace.service';

describe('AdvspaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvspaceService]
    });
  });

  it('should be created', inject([AdvspaceService], (service: AdvspaceService) => {
    expect(service).toBeTruthy();
  }));
});
