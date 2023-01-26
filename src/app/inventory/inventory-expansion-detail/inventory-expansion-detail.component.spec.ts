import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InventoryExpansionDetailComponent } from "./inventory-expansion-detail.component";

describe("InventoryExpansionDetailComponent", () => {
  let component: InventoryExpansionDetailComponent;
  let fixture: ComponentFixture<InventoryExpansionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryExpansionDetailComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InventoryExpansionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
