import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySuppliesCreationComponent } from './inventory-supplies-creation.component';

describe('InventorySuppliesCreationComponent', () => {
  let component: InventorySuppliesCreationComponent;
  let fixture: ComponentFixture<InventorySuppliesCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorySuppliesCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorySuppliesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
