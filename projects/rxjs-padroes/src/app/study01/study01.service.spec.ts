import { TestBed } from '@angular/core/testing';

import { Study01Service } from './study01.service';

describe('Study01Service', () => {
  let service: Study01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Study01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
