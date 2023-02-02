import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InventoryState } from "./inventory.reducer";

export const INVENTORY_KEY = "inventory";

export const selectInventory = createFeatureSelector<InventoryState>(INVENTORY_KEY);

export const selectEquipmentFromInventory = createSelector(
  selectInventory,
  (state) => state.equipment
);
