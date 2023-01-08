import { TestBed } from '@angular/core/testing';

import { MaterialsDataService } from './materials-data.service';

describe('MaterialsDataService', () => {
  let service: MaterialsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
