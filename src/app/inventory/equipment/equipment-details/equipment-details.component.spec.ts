import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EquipimentDetailsComponent } from "./equipment-details.component";

describe("EquipimentDetailsComponent", () => {
  let component: EquipimentDetailsComponent;
  let fixture: ComponentFixture<EquipimentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipimentDetailsComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EquipimentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
