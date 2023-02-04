import { EquipmentState } from "./equipment/equipment.reducer";
import { InventoryState } from "./all-inventory/all-inventory.reducer";

export interface AppState {
  equipment: EquipmentState;
  inventory: InventoryState;
}
