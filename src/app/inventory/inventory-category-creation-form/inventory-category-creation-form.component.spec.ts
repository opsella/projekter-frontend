import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InventoryCategoryCreationFormComponent } from "./inventory-category-creation-form.component";

describe("InventoryCategoryCreationFormComponent", () => {
  let component: InventoryCategoryCreationFormComponent;
  let fixture: ComponentFixture<InventoryCategoryCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InventoryCategoryCreationFormComponent 
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InventoryCategoryCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
