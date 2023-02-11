import { Apollo, gql } from "apollo-angular";
import { map } from "rxjs";
import { Equipment } from "../models/equipment";
import { InventoryItem } from "../state/all-inventory/all-inventory.actions";

export function getInventoryItemById(apollo: Apollo, itemId: string) {
  return apollo.watchQuery<{
    inventoryById: InventoryItem;
  }>({
    query: gql`
      query GetInventoryById($id: UUID!) {
        inventoryById(id: $id) {
          id
        }
      }
    `,
    variables: {
      itemId
    }
  })
    .valueChanges
    .pipe(
      map((response) => {
        return Equipment.fromEquipmentResponse(response.data.inventoryById);
      })
    );
}
