import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ItemsPageComponent } from "./items-page.component";

describe("InventoryListPageComponent", () => {
  let component: ItemsPageComponent;
  let fixture: ComponentFixture<ItemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsPageComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
