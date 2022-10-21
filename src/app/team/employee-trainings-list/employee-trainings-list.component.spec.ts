import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EmployeeTrainingsListComponent } from "./employee-trainings-list.component";

describe("EmployeeTrainingsListComponent", () => {
    let component: EmployeeTrainingsListComponent;
    let fixture: ComponentFixture<EmployeeTrainingsListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ EmployeeTrainingsListComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(EmployeeTrainingsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
