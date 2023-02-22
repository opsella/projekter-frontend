import { Injectable } from "@angular/core";
import { CustomerFilters, getAllCustomers } from "../queries/customer-queries";
import { Observable } from "rxjs";
import { Customer } from "../models/customer";
import { Apollo } from "apollo-angular";

@Injectable({
  providedIn: "root"
})
export class CustomerApiService {
  constructor(private apollo: Apollo) {
  }

  public queryCustomers(filters: CustomerFilters): Observable<Customer[]> {
    return getAllCustomers(this.apollo, filters);
  }
}
