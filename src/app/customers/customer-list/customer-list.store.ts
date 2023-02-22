import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Customer } from "../../models/customer";
import { InventoryFilters } from "../../inventory/inventory-data.service";
import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";
import { CustomerDataService } from "../customer-data.service";
import { ExpansionTableData } from "../../shared/expansion-table/expandable-data";
import { CustomerTableContentComponent } from "../customer-table-content/customer-table-content.component";

export interface CustomerListState {
  customers : Customer[];
  status: "pending" | "loading" | "succeeded" | "failed";
  tableFilters: [];
}

@Injectable()
export class CustomerListStore extends ComponentStore<CustomerListState> {
  constructor(
    private customerDataService: CustomerDataService
  ) {
    super({
      customers    : [],
      status       : "pending",
      tableFilters : []
    });
  }

  public readonly getCustomerTableData = this.effect<{
    filters: InventoryFilters;
  }>((
    filters$: Observable<{filters: InventoryFilters }>
  ) => {
    return filters$.pipe(
      switchMap(
        (filters) => this.customerDataService.customerTableQuery(filters.filters).pipe(
          tap({
            next: (data) => {
              this.setCustomerTableData(data);
              this.setStatusSucceeded();
            },
            error: () => EMPTY
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  private readonly setCustomerTableData = this.updater((state, value: Customer[]) => ({
    ...state,
    customers: [ ...value ]
  }));

  private readonly setStatusSucceeded = this.updater((state) => ({
    ...state,
    status: "succeeded"
  }));

  private readonly customers$ = this.select(state => state.customers);

  private selectTableData(): Observable<ExpansionTableData<Customer>[]> {
    return this.select(
      this.customers$,
      (customers): ExpansionTableData<Customer>[] => {
        return customers.map(customer => {
          return {
            data: {
              ...customer
            },
            actions: [
              {
                title   : "Details",
                enabled : () => true,
                visible : () => true,
                action  : async (row: any) => {}
              },
              {
                title   : "Edit",
                enabled : () => true,
                visible : () => true,
                action  : async (row: any) => {}
              }
            ],
            expansionComponent: CustomerTableContentComponent,
          } as ExpansionTableData<Customer>;
        });
      }
    );
  }

  private readonly hasData$ = this.select(
    ({ status }) => status === "succeeded"
  );

  private readonly tableFilters$ = this.select(
    ({ tableFilters }) => tableFilters
  );

  public readonly vm$ = this.select({
    customers$    : this.selectTableData(),
    hasData$      : this.hasData$,
    tableFilters$ : this.tableFilters$
  });
}
