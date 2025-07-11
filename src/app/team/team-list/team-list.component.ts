import { Component } from "@angular/core";
import { ContentSectionComponent } from "../../shared/content-section/content-section.component";
import { Employee } from "../../models/employee";
import { EmployeesService } from "../employees.service";
import { HttpResourceRef } from "@angular/common/http";
import { SimpleTableComponent } from "../../shared/simple-table/simple-table.component";
import {Button} from "primeng/button";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.scss"],
  imports: [ContentSectionComponent, SimpleTableComponent, Button],
  standalone: true,
})
export class TeamListComponent {
  protected employees: HttpResourceRef<Employee[]> = this.employeeService.employees();

  constructor(
    private employeeService: EmployeesService
  ) {
  }
}
