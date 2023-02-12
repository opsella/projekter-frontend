import { Apollo, gql } from "apollo-angular";
import { map, Observable } from "rxjs";
import { InventoryItem } from "../services/inventory-api.service";

/**
 *
 * We need to either make it possible to send any inventory item id and get it back
 * or we need to have separate calls for the different inventory types. This current
 * foundation is assuming we can do it with one.
 */
export function getInventoryDetailsById(apollo: Apollo, inventoryId: string): Observable<any> {
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
        return response;// return proper data
      })
    );
}
