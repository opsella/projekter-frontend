import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTableContentComponent } from './equipment-table-content.component';

describe('EquipmentTableContentComponent', () => {
  let component: EquipmentTableContentComponent;
  let fixture: ComponentFixture<EquipmentTableContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentTableContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentTableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
