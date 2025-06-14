import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DataListComponent } from "./data-list.component";

class InternalTestData {
  public name = "test";
}

describe("DataListComponent", () => {
  let component: DataListComponent<InternalTestData>;
  let fixture: ComponentFixture<DataListComponent<InternalTestData>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DataListComponent]
})
      .compileComponents();

    fixture = TestBed.createComponent(DataListComponent<InternalTestData>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
