import { TestBed } from '@angular/core/testing';

import { FomatButtonLibService } from './fomat-button-lib.service';

describe('FomatButtonLibService', () => {
  let service: FomatButtonLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FomatButtonLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
