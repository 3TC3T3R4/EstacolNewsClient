import { TestBed } from '@angular/core/testing';

import { CreatePublicationService } from './create-publication.service';

describe('CreatePublicationService', () => {
  let service: CreatePublicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePublicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
