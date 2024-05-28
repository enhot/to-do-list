import { TestBed } from '@angular/core/testing';

import { SendProjectFormService } from './send-project-form.service';

describe('SendProjectFormService', () => {
  let service: SendProjectFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendProjectFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
