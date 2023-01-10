import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavigationRouteElementComponent } from "./navigation-route-element.component";

describe("NavigationRouteElementComponent", () => {
  let component: NavigationRouteElementComponent;
  let fixture: ComponentFixture<NavigationRouteElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationRouteElementComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavigationRouteElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
