import { Injectable } from "@angular/core";
import { CustomerFilters, getAllCustomers, getCustomerById } from "../queries/customer-queries";
import { createCustomer, editCustomer } from "../queries/customer-mutations";
import { Observable } from "rxjs";
import { Customer } from "../models/customer";
import { Apollo } from "apollo-angular";
import { InventoryFilters } from "../inventory/inventory-data.service";

@Injectable({
  providedIn: "root"
})
export class CustomerApiService {
  constructor(private apollo: Apollo) {
  }

  public queryCustomers(filters: CustomerFilters): Observable<Customer[]> {
    return getAllCustomers(this.apollo, filters);
  }

  public editCustomer(customer: Customer) {
    return editCustomer(this.apollo, customer);
  }

  public createCustomer(customer: Customer) {
    return createCustomer(this.apollo, customer);
  }

  public getCustomerById(filters: InventoryFilters) {
    return getCustomerById(this.apollo, filters);
  }
}
