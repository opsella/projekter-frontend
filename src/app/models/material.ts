import { MaterialsResponse } from "../services/inventory-api.service";

export class Material {
  constructor(
    public id: string,
    public code: string,
    public name: string,
    public description: string,
    public quantity: number,
    public unit: number
  ) {
  }

  public static fromMaterialResponse(response: MaterialsResponse) {
    return new Material(response.id, response.code, response.name, response.description, response.quantity, response.unit);
  }

  public static isMaterial(value: unknown): value is Material {
    return value instanceof Material;
  }
}
