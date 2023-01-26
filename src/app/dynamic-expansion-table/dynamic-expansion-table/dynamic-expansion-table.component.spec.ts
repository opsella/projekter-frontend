import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DynamicExpansionTableComponent } from "./dynamic-expansion-table.component";

describe("DynamicExpansionTableComponent", () => {
  let component: DynamicExpansionTableComponent;
  let fixture: ComponentFixture<DynamicExpansionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicExpansionTableComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DynamicExpansionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
