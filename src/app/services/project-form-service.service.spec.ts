import { TestBed } from '@angular/core/testing';

import { ProjectFormServiceService } from './project-form-service.service';

describe('ProjectFormServiceService', () => {
  let service: ProjectFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
