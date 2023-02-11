import { EquipmentResponse } from "../services/inventory-api.service";

export class Equipment {
  constructor(
    public id: string,
    public code: string,
    public name: string,
    public description: string
  ) {
  }

  public static fromEquipmentResponse(response: EquipmentResponse) {
    return new Equipment(response.id, response.code, response.name, response.description);
  }

  public static isEquipment(value: unknown): value is Equipment {
    return value instanceof Equipment;
  }
}
