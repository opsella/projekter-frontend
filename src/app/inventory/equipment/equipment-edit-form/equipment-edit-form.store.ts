import { ComponentStore } from "@ngrx/component-store";
import { InventoryDataService } from "../../inventory-data.service";
import { Equipment } from "../../../models/equipment";
import { Material } from "../../../models/material";
import { Injectable } from "@angular/core";

export interface EquipmentEditFormState {
  equipment: Equipment | Material | null;
  status: "pending" | "loading" | "succeeded" | "failed";
}

@Injectable()
export class EquipmentEditFormStore extends ComponentStore<EquipmentEditFormState> {
  constructor(
    private inventoryDataService: InventoryDataService
  ) {
    super({
      equipment : {} as Equipment,
      status    : "pending"
    });
  }

  // public readonly getFormData = this.effect<{
  //   equipmentId: string;
  // }>((
  //   filters$: Observable<{equipmentId: string}>
  // ) => {
  //   return filters$.pipe(
  //     switchMap(
  //       (filters) => this.inventoryDataService.getInventoryItemById(filters.equipmentId).pipe(
  //         tap({
  //           next: (data) => {
  //             this.setFormData(data);
  //             this.setStatusSucceeded();
  //           },
  //           error: () => EMPTY
  //         }),
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   );
  // });

  private readonly setStatusSucceeded = this.updater((state) => ({
    ...state,
    status: "succeeded"
  }));

  private readonly setFormData = this.updater((state, value: Equipment) => ({
    ...state,
    equipment: { ...value }
  }));

  public readonly vm$ = this.select(
    this.state$,
    (state) => ({
      equipment: state.equipment
    })
  );
}
