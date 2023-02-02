import { createAction, props } from "@ngrx/store";
import { Equipment } from "../../equipment/models/equipment";

export enum InventoryActions {
  addEquipment = "[Inventory Page] Add Equipment"
}

export const addEquipment = createAction(
  InventoryActions.addEquipment,
  props<{ equipment: Equipment }>()
);
