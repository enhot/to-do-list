import { TestBed } from '@angular/core/testing';

import { RegistretionFormService } from './registretion-form.service';

describe('RegistretionFormService', () => {
  let service: RegistretionFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistretionFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
