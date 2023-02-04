import { createReducer, on } from "@ngrx/store";
import * as InventoryActions from "./all-inventory.actions";
import { InventoryItem } from "./all-inventory.actions";

export interface InventoryState {
  inventoryItem: InventoryItem | undefined;
  error?: string;
  status: "loading" | "success" | "error" | "pending";
}

export const initialState: InventoryState = {
  inventoryItem : undefined,
  error         : "",
  status        : "pending"
};

export const inventoryItemsReducer = createReducer(
  initialState,
  on(InventoryActions.loadInventoryItemDetails, (state) => {
    return {
      ...state,
      status: "loading"
    };
  }),
  on(InventoryActions.loadInventoryItemDetailsSuccess, (state, { payload }) => {
    return {
      ...state,
      status        : "success",
      inventoryItem : { ...payload },
      error         : undefined
    };
  })
);
