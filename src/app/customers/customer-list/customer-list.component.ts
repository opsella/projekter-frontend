import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomerListStore } from "./customer-list.store";

@Component({
  selector    : "app-customer-list",
  templateUrl : "./customer-list.component.html",
  styleUrls   : ["./customer-list.component.scss"],
  providers   : [CustomerListStore]
})
export class CustomerListComponent implements OnInit {
  public readonly vm$ = this.customerListStore.vm$;

  constructor(
    private readonly customerListStore: CustomerListStore,
    private router: Router
  ) {
  }

  public ngOnInit() {
    this.customerListStore.getCustomerTableData({ filters: {} });
  }
}
