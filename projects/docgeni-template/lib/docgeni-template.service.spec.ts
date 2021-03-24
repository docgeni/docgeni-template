import { TestBed } from '@angular/core/testing';

import { DocgeniTemplateService } from './docgeni-template.service';

describe('DocgeniTemplateService', () => {
  let service: DocgeniTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocgeniTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
