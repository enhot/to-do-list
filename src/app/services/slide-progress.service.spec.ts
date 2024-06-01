import { TestBed } from '@angular/core/testing';

import { SlideProgressService } from './slide-progress.service';

describe('SlideProgressService', () => {
  let service: SlideProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
