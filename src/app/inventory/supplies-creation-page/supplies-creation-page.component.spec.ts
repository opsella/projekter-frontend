import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SuppliesCreationPageComponent } from "./supplies-creation-page.component";

describe("InventorySuppliesCreationComponent", () => {
  let component: SuppliesCreationPageComponent;
  let fixture: ComponentFixture<SuppliesCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliesCreationPageComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SuppliesCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
