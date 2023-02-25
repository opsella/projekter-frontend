import { Component } from "@angular/core";
import { CustomerEditStore } from "./customer-edit.store";
import { FormGroup } from "@angular/forms";

@Component({
  selector    : "app-customer-edit",
  templateUrl : "./customer-edit.component.html",
  styleUrls   : ["./customer-edit.component.scss"],
  providers   : [CustomerEditStore]
})
export class CustomerEditComponent {
  public readonly vm$ = this.customerEditStore.vm$;

  constructor(
    private readonly customerEditStore: CustomerEditStore
  ) {
  }

  protected onSubmit(form: FormGroup) {
    this.customerEditStore.setStatusLoading();

    const values = { ...form.value };
    this.customerEditStore.submitCustomer({ values });
  }
}
