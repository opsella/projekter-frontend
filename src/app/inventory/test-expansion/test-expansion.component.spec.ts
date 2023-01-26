import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TestExpansionComponent } from "./test-expansion.component";

describe("TestExpansionComponent", () => {
  let component: TestExpansionComponent;
  let fixture: ComponentFixture<TestExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestExpansionComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
