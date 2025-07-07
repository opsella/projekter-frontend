import { MaterialId } from "./ids/material-id";
import { TenantId } from "./ids/tenant-id";
import { InventoryItemId } from "./ids/inventory-item-id";

export interface MaterialResponse {
  id: string;
  tenant_id: string;
  inventory_item_id: string;
  name: string;
  description: string;
  unit_of_measure: string;
  quantity: number;
}

export class Material {
  constructor(
    public id: MaterialId,
    public tenant_id: TenantId,
    public inventory_item_id: InventoryItemId,
    public name: string,
    public description: string,
    public unit_of_measure: string,
    public quantity: number
  ) {
  }

  public static fromResponse(response: MaterialResponse): Material {
    return new Material(
      MaterialId.fromJSON(response.id),
      TenantId.fromJSON(response.tenant_id),
      InventoryItemId.fromJSON(response.inventory_item_id),
      response.name,
      response.description,
      response.unit_of_measure,
      response.quantity,
    );
  }
}
