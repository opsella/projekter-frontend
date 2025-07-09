import { Component } from "@angular/core";
import { PageWrapperComponent } from "../../shared/page-wrapper/page-wrapper.component";
import { ContentSectionComponent } from "../../shared/content-section/content-section.component";
import { Employee } from "../../models/employee";
import { EmployeesService } from "../employees.service";
import { HttpResourceRef } from "@angular/common/http";
import { SimpleTableComponent } from "../../shared/simple-table/simple-table.component";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.scss"],
  imports: [PageWrapperComponent, ContentSectionComponent, SimpleTableComponent, MatButton],
  standalone: true,
})
export class TeamListComponent {
  protected employees: HttpResourceRef<Employee[]> = this.employeeService.employees();

  constructor(
    private employeeService: EmployeesService
  ) {
  }
}
