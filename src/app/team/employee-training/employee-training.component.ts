import { Component, OnInit } from "@angular/core";
import { EmployeeTrainingService, TrainingObj, } from "../../services/employee-training.service";

@Component({
    selector: "app-employee-training",
    templateUrl: "./employee-training.component.html",
    styleUrls: ["./employee-training.component.scss"],
})
export class EmployeeTrainingComponent implements OnInit {
    public toDoTrainings: Array<TrainingObj> = [];
    public completedTrainings: Array<TrainingObj> = [];

    constructor(private service: EmployeeTrainingService) {}

    public ngOnInit(): void {
        this.setTrainings();
    }

    public setTrainings() {
        this.toDoTrainings = this.service.getToDoTrainings();
        this.completedTrainings = this.service.getCompletedTrainings();
    }
}
