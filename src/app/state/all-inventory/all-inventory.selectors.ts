import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InventoryState } from "./all-inventory.reducer";

export const INVENTORY_KEY = "inventory";

export const selectInventory = createFeatureSelector<InventoryState>(INVENTORY_KEY);

export const selectInventoryItemDetails = createSelector(
  selectInventory,
  (state) => state?.inventoryItem
);
