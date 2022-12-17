import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SetupPageWrapperComponent } from "./setup-page-wrapper.component";

describe("SetupPageComponent", () => {
  let component: SetupPageWrapperComponent;
  let fixture: ComponentFixture<SetupPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupPageWrapperComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SetupPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
