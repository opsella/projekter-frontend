import { TestBed } from '@angular/core/testing';

import { EquipmentDetailsResolver } from './equipment-details.resolver';

describe('EquipmentDetailsResolver', () => {
  let resolver: EquipmentDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EquipmentDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
