import { ComponentStore } from "@ngrx/component-store";
import { Injectable } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Customer } from "../../models/customer";
import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";
import { CustomerDataService } from "../customer-data.service";
import { InventoryFilters } from "../../inventory/inventory-data.service";

export interface CustomerEditState {
  status: "pending" | "loading" | "succeeded" | "failed";
  customerForm: FormGroup;
}

@Injectable()
export class CustomerEditStore extends ComponentStore<CustomerEditState> {
  constructor(
    private customerDataService: CustomerDataService,
    private formBuilder: FormBuilder
  ) {
    super({
      status       : "pending",
      customerForm : formBuilder.group({
        name                : new FormControl( "", [Validators.required]),
        code                : new FormControl("", Validators.required),
        description         : new FormControl(""),
        contacts            : new FormControl(""),
        category            : new FormControl(""),
        location            : new FormControl(""),
        locationDescription : new FormControl(""),
        status              : new FormControl(""),
        summary             : new FormControl("")
      })
    });
  }

  public readonly getDetailsForCustomerForm = this.effect<{
    customerId: InventoryFilters;
  }>((
    filters$: Observable<{customerId: InventoryFilters }>
  ) => {
    return filters$.pipe(
      switchMap(
        (filters) => this.customerDataService.customerDetailsQuery(filters.customerId).pipe(
          tap({
            next: (data) => {
              this.setFormData(data);
              this.setStatusSucceeded();
            },
            error: () => EMPTY
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  public readonly submitCustomer = this.effect<{
    values: Customer;
  }>((
    filters$: Observable<{values: Customer}>
  ) => {
    return filters$.pipe(
      switchMap(
        (formData) => this.customerDataService.mutateCustomer(formData.values).pipe(
          tap({
            next: (data) => {
              if (data?.data) {
                this.setStatusSucceeded();
                this.clearForm();
              } else {
                this.setStatusFailed();
              }
            },
            error: () => EMPTY

          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  private readonly clearForm = this.updater((state) => {
    state.customerForm.reset();

    return {
      ...state
    };
  });

  public readonly setFormData = this.updater((state, data: Customer) => {
    state.customerForm.patchValue(data);

    return  {
      ...state
    };
  });

  private readonly setStatusFailed = this.updater((state) => ({
    ...state,
    status: "failed"
  }));

  private readonly setStatusSucceeded = this.updater((state) => ({
    ...state,
    status: "succeeded"
  }));

  public readonly setStatusLoading = this.updater((state) => ({
    ...state,
    status: "loading"
  }));

  private readonly customerFormData$ = this.select(
    ({ customerForm }) => customerForm
  );

  private readonly status$ = this.select(
    ({ status }) => status
  );

  public readonly nameInputInvalid = this.select(({ customerForm }) => {
    const name = customerForm.get("name");
    return name?.invalid && (name?.dirty || name?.touched);
  });

  public readonly codeInputInvalid = this.select(({ customerForm }) => {
    const code = customerForm.get("code");
    return code?.invalid && (code?.dirty || code?.touched);
  });

  public readonly vm$ = this.select({
    status           : this.status$,
    customerForm     : this.customerFormData$,
    nameInputInvalid : this.nameInputInvalid,
    codeInputInvalid : this.codeInputInvalid
  });
}
