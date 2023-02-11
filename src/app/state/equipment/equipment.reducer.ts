import { Equipment } from "../../models/equipment";
import { createReducer, on } from "@ngrx/store";
import * as EquipmentActions from "./equipment.actions";

export interface EquipmentState {
  equipment: Equipment[];
  error?: string;
  status: "loading" | "success" | "error" | "pending";
}

export const initialState: EquipmentState = {
  equipment : [],
  error     : "",
  status    : "pending"
};

export const equipmentInventoryReducer = createReducer(
  initialState,
  on(EquipmentActions.addEquipment, (state, { equipment }) => {
    return {
      ...state,
      equipment: [
        ...state.equipment, equipment
      ]
    };
  }),
  on(EquipmentActions.loadEquipment, (state) => {
    return {
      ...state,
      status: "loading"
    };
  }),
  on(EquipmentActions.loadEquipmentSuccess, (state, { payload }) => {
    return {
      ...state,
      status    : "success",
      equipment : [...payload],
      error     : undefined
    };
  })
);
