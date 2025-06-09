import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SimpleChipComponent } from "./simple-chip.component";

describe("SimpleChipComponent", () => {
  let component: SimpleChipComponent;
  let fixture: ComponentFixture<SimpleChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleChipComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SimpleChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
