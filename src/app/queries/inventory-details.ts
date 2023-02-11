import { Apollo, gql } from "apollo-angular";
import { map } from "rxjs";
import { InventoryItem } from "../state/all-inventory/all-inventory.actions";

export function getInventoryDetailsById(apollo: Apollo, inventoryId: string) {
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
      inventoryId
    }
  })
    .valueChanges
    .pipe(
      map((response) => {
        return; // some data that contains all inventory details for a given ID
      })
    );
}
