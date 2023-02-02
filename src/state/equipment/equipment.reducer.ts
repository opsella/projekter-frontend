import { createReducer, on } from "@ngrx/store";
import { Equipment } from "../../app/equipment/models/equipment";
import * as EquipmentActions from "./equipment.actions";

export interface EquipmentState {
  equipment: Equipment[];
  status: "loading" | "success" | "error" | "pending";
}

export const initialState: EquipmentState = {
  equipment : [],
  status    : "pending"
};

export const equipmentReducer = createReducer(
  initialState,
  on(EquipmentActions.createEquipment, (state, { equipmentToCreate })  => {
    return {
      ...state,
      equipment: [
        ...state.equipment, equipmentToCreate
      ]
    };
  }),
);
