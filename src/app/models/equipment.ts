import { InventoryItemId } from "./ids/inventory-item-id";
import { TenantId } from "./ids/tenant-id";
import { EquipmentId } from "./ids/equipment-id";

export interface EquipmentResponse {
  equipment_id: string;
  tenant_id: string;
  inventory_item_id: string;
  name: string;
  description: string;
}

export class Equipment {
  constructor(
    public id: EquipmentId,
    public tenant_id: TenantId,
    public inventory_item_id: InventoryItemId,
    public name: string,
    public description: string
  ) {
  }

  public static fromResponse(response: EquipmentResponse): Equipment {
    return new Equipment(
      EquipmentId.fromJSON(response.equipment_id),
      TenantId.fromJSON(response.tenant_id),
      InventoryItemId.fromJSON(response.inventory_item_id),
      response.name,
      response.description,
    );
  }
}
