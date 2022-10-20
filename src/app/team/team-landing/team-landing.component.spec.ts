import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLandingComponent } from './team-landing.component';

describe('TeamLandingComponent', () => {
  let component: TeamLandingComponent;
  let fixture: ComponentFixture<TeamLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
