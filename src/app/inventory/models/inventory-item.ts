export interface InventoryItem {
    name: string;
    code: string;
    description: string;
    manufacturer: string;
    tags: string[];
    metadata?: object;
}

export interface InventorySupplies extends InventoryItem {
    quantity: number;
    unitOfMeasure: string;
}

export type InventoryEquipment = InventoryItem;
