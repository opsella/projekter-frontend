import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../models/customer";
import { CustomerFilters } from "../queries/customer-queries";
import { CustomerApiService } from "../services/customer-api.service";

@Injectable({
  providedIn: "root"
})
export class CustomerDataService {

  constructor(
    private customerApiService: CustomerApiService
  ) { }

  public customerTableQuery(filters: CustomerFilters): Observable<Customer[]> {
    return this.customerApiService.queryCustomers(filters);
  }
}
