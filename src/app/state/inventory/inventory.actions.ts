import { createAction, props } from "@ngrx/store";
import { Equipment } from "../../equipment/models/equipment";
import { EquipmentFilters } from "../../queries/equipment-queries";

export enum InventoryActions {
  addEquipment = "[Inventory Page] Add Equipment",
  loadEquipment = "[Inventory Page] Load Equipment",
  loadEquipmentSuccess = "[Equipment API] Load Success",
  searchEquipment = "[Inventory Page] Search Equipment",
}

export const addEquipment = createAction(
  InventoryActions.addEquipment,
  props<{ equipment: Equipment }>()
);

export const loadEquipment = createAction(
  InventoryActions.loadEquipment
);

export const searchEquipment = createAction(
  InventoryActions.searchEquipment,
  props<{ query?: EquipmentFilters }>()
);

export const loadEquipmentSuccess = createAction(
  InventoryActions.loadEquipmentSuccess,
  props<{ payload: Equipment[] }>()
);
