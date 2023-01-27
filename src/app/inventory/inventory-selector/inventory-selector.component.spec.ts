import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySelectorComponent } from './inventory-selector.component';

describe('InventorySelectorComponent', () => {
  let component: InventorySelectorComponent;
  let fixture: ComponentFixture<InventorySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorySelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
