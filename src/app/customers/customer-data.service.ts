import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../models/customer";
import { CustomerFilters } from "../queries/customer-queries";
import { CustomerApiService } from "../services/customer-api.service";
import { InventoryFilters } from "../inventory/inventory-data.service";

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

  public mutateCustomer(customer: Customer): Observable<any> {
    if (customer?.id) {
      return this.editCustomer(customer);
    } else {
      return this.createCustomer(customer);
    }
  }

  public editCustomer(customer: Customer) {
    return this.customerApiService.editCustomer(customer);
  }

  public createCustomer(customer: Customer) {
    return this.customerApiService.createCustomer(customer);
  }

  public customerDetailsQuery(filters: InventoryFilters) {
    return this.customerApiService.getCustomerById(filters);
  }
}
