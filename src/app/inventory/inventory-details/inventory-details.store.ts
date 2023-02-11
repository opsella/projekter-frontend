import { ComponentStore } from "@ngrx/component-store";
import { InventoryDataService } from "../inventory-data.service";
import { Equipment } from "../../models/equipment";
import { Material } from "../../models/material";
import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";
import { Injectable } from "@angular/core";

export interface InventoryDetailsState {
  inventoryDetails: Equipment | Material | null;
  status: "pending" | "loading" | "succeeded" | "failed";
}

@Injectable()
export class InventoryDetailsStore extends ComponentStore<InventoryDetailsState> {
  constructor(
    private inventoryDataService: InventoryDataService
  ) {
    super({
      inventoryDetails : {} as Equipment | Material,
      status           : "pending"
    });
  }

  public readonly getInventoryDetails = this.effect<{
    inventoryId: string;
  }>((
    filters$: Observable<{inventoryId: string}>
  ) => {
    return filters$.pipe(
      switchMap(
        (filters) => this.inventoryDataService.inventoryDetailsQuery(filters.inventoryId).pipe(
          tap({
            next: (data) => {
              this.setInventoryDetails(data);
              this.setStatusSucceeded();
            },
            error: () => EMPTY
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  private readonly setInventoryDetails = this.updater((state, value: Equipment | Material) => ({
    ...state,
    inventoryDetails: value
  }));

  private readonly setStatusSucceeded = this.updater((state) => ({
    ...state,
    status: "succeeded"
  }));

  public readonly vm$ = this.select(
    this.state$,
    (state) => ({
      inventoryDetails: state.inventoryDetails
    })
  );
}
