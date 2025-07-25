import {Component, inject} from '@angular/core';
import {ContentSectionComponent} from "../../shared/content-section/content-section.component";
import {SimpleTableComponent, TableConfig} from "../../shared/simple-table/simple-table.component";
import {HttpResourceRef} from "@angular/common/http";
import {Toolbar} from "primeng/toolbar";
import {Button} from "primeng/button";
import {UsersService} from "../../user/services/users.service";
import {User} from "../../models/user";

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
  private usersService: UsersService = inject(UsersService);

  protected users: HttpResourceRef<User[]> = this.usersService.getUsers();
  protected employeesTableConfig: TableConfig<User> = {
    columns: [
      {
        id: "id",
        key: "id",
        name: "Id",
        hidden: () => true
      },
      {
        id: "employeeId",
        name: "Employee Id",
        transform: (item) => {
          return item.employee.externalEmployeeId ?? "None";
        }
      },
      {
        id: "employeeName",
        name: "Name",
        transform: (item): string => {
          if (item.nickname)
            return item.nickname;

          if (item.first_name && item.last_name)
            return (item.first_name + " " + item.last_name).trim()

          return "no name is provided";
        }
      },
      {
        id: "isActive",
        name: "Active",
        transform: (item): string => {
          return item.employee.isActive ? "YES" : "NO";
        }
      }
    ],
    actions: [],
  };
}
