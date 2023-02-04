import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EquipmentState } from "./equipment.reducer";

export const INVENTORY_KEY = "inventory";

export const selectInventory = createFeatureSelector<EquipmentState>(INVENTORY_KEY);

export const selectEquipmentFromInventory = createSelector(
  selectInventory,
  (state) => state.equipment
);
