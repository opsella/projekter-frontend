import { createAction, props } from "@ngrx/store";
import { Equipment } from "../../equipment/models/equipment";
import { Material } from "../../materials/models/material";

export enum InventoryActions {
  loadInventoryItemDetails = "[Inventory Details] Get Inventory Item By ID",
  loadInventoryItemSuccess = "[Inventory Details] Load Inventory Item"
}

export const loadInventoryItemDetails = createAction(
  InventoryActions.loadInventoryItemDetails,
  props<{ itemId: string }>()
);

export const loadInventoryItemDetailsSuccess = createAction(
  InventoryActions.loadInventoryItemSuccess,
  props<{ payload: InventoryItem }>()
);

export type InventoryItem = Equipment | Material;
