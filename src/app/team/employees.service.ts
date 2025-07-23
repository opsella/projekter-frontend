import { Injectable } from "@angular/core";
import { httpResource, HttpResourceRef } from "@angular/common/http";
import {Employee, EmployeeInfoResponse} from "../models/employee";
import { environment } from "../../environments/environment";
import { PaginatedApiResponse } from "../models/api/api-response";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {

  constructor() { }

  public employees(): HttpResourceRef<Employee[]> {
    return httpResource<Employee[]>(
      () => ({
        url: `${environment.projekterApi}/employees`
      }),
      {
        parse: (result: PaginatedApiResponse<EmployeeInfoResponse>) => {
          return result.data?.map((employee) => {
            return Employee.fromResponse(employee);
          });
        }
      }
    );
  }
}
