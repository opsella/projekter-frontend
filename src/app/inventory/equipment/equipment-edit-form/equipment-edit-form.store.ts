import { ComponentStore } from "@ngrx/component-store";
import { InventoryDataService } from "../../inventory-data.service";
import { Injectable } from "@angular/core";
import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";
import { Equipment } from "../../../models/equipment";

export interface EquipmentEditFormState {
  status: "pending" | "loading" | "succeeded" | "failed";
}

@Injectable()
export class EquipmentEditFormStore extends ComponentStore<EquipmentEditFormState> {
  constructor(
    private inventoryDataService: InventoryDataService
  ) {
    super({
      status: "pending"
    });
  }

  public readonly editEquipment = this.effect<{
    equipment: Equipment;
  }>((
    filters$: Observable<{equipment: Equipment}>
  ) => {
    return filters$.pipe(
      switchMap(
        (equipment) => this.inventoryDataService.inventoryEditEquipment(equipment.equipment).pipe(
          tap({
            next: (data) => {
              this.setStatusSucceeded();
              // navigate back to list page if no error
              // provide details that save failed and let them try again
            },
            error: () => EMPTY
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  private readonly setStatusSucceeded = this.updater((state) => ({
    ...state,
    status: "succeeded"
  }));
}
