import { createAction, props } from "@ngrx/store";
import { Equipment } from "../../models/equipment";
import { EquipmentFilters } from "../../queries/equipment-queries";

export enum EquipmentActions {
  addEquipment = "[Inventory Page] Add Equipment",
  loadEquipment = "[Inventory Page] Load Equipment",
  loadEquipmentSuccess = "[Equipment API] Load Success",
  searchEquipment = "[Inventory Page] Search Equipment",
}

export const addEquipment = createAction(
  EquipmentActions.addEquipment,
  props<{ equipment: Equipment }>()
);

export const loadEquipment = createAction(
  EquipmentActions.loadEquipment
);

export const searchEquipment = createAction(
  EquipmentActions.searchEquipment,
  props<{ query?: EquipmentFilters }>()
);

export const loadEquipmentSuccess = createAction(
  EquipmentActions.loadEquipmentSuccess,
  props<{ payload: Equipment[] }>()
);
