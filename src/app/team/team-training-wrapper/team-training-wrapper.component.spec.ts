import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TeamTrainingWrapperComponent } from "./team-training-wrapper.component";

describe("TeamTrainingWrapperComponent", () => {
  let component: TeamTrainingWrapperComponent;
  let fixture: ComponentFixture<TeamTrainingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamTrainingWrapperComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TeamTrainingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
