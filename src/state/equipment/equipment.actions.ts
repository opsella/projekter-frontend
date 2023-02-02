import { createAction, props } from "@ngrx/store";
import { Equipment } from "../../app/equipment/models/equipment";

export enum EquipmentActions {
  createEquipment = "[Inventory Page] Create",
  loadEquipment = "[Inventory Page] Load"
}

export const createEquipment = createAction(EquipmentActions.createEquipment, props<{ equipmentToCreate: Equipment }>());
export const loadEquipment = createAction(EquipmentActions.loadEquipment);
