import {Component, inject} from '@angular/core';
import {ContentSectionComponent} from "../../shared/content-section/content-section.component";
import {SimpleTableComponent, TableConfig} from "../../shared/simple-table/simple-table.component";
import {EmployeesService} from "../employees.service";
import {Employee} from "../../models/employee";
import {HttpResourceRef} from "@angular/common/http";
import {Toolbar} from "primeng/toolbar";
import {Button} from "primeng/button";

@Component({
  selector: 'app-employees-dashboard',
  imports: [
    ContentSectionComponent,
    SimpleTableComponent,
    SimpleTableComponent,
    Toolbar,
    Button
  ],
  templateUrl: './employees-dashboard.component.html',
  styleUrl: './employees-dashboard.component.scss'
})
export class EmployeesDashboardComponent {
  private employeesService: EmployeesService = inject(EmployeesService);

  protected employees: HttpResourceRef<Employee[]> = this.employeesService.employees();
  protected employeesTableConfig: TableConfig<Employee> = {
    columns: [
      {
        key: "id",
        name: "Id"
      },
      {
        key: "isActive",
        name: "Active",
        transform: (item): string => {
          return item.isActive ? "YES" : "NO";
        }
      }
    ],
    actions: [],
  };
}
