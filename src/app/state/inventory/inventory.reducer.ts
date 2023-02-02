import { Equipment } from "../../equipment/models/equipment";
import { createReducer, on } from "@ngrx/store";
import * as InventoryActions from "./inventory.actions";

export interface InventoryState {
  equipment: Equipment[];
  error: string;
  status: "loading" | "success" | "error" | "pending";
}

export const initialState: InventoryState = {
  equipment : [],
  error     : "",
  status    : "pending"
};

export const equipmentReducer = createReducer(
  initialState,
  on(InventoryActions.addEquipment, (state, { equipment }) => {
    return {
      ...state,
      equipment: [
        ...state.equipment, equipment
      ]
    };
  }),
);
