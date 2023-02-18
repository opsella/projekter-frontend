import { Page, Pageable } from "../shared/page";
import { Equipment } from "../models/equipment";
import { map, Observable } from "rxjs";
import { EquipmentResponse } from "../services/inventory-api.service";
import { Apollo, gql } from "apollo-angular";
import { InventoryFilters } from "../inventory/inventory-data.service";

export interface EquipmentFilters {
  id?: string | undefined;
  code?: string | undefined;
  description?: string | undefined;
}
export function getAllEquipment(apollo: Apollo, filters: EquipmentFilters): Observable<Equipment[]> {
  return apollo.watchQuery<{
    equipment: Page<EquipmentResponse>;
  }>({
    query: gql`
      query SearchAvailableEquipment($first: Int, $last: Int, $after: String, $before: String, $code: String, $description: String, $id: UUID) {
        equipment(
          first: $first
          last: $last
          after: $after
          before: $before
          input: {
            code: $code
            descriptionContains: $description
            equipmentId: $id
          }
        ) {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              id
              name
              code
              description
            }
          }
        }
      }
    `,
    variables: {
      ...new Pageable<EquipmentFilters>(filters)
        .setFirst(10)
    }
  })
    .valueChanges
    .pipe(
      map((response) => {
        return Page.fromData<EquipmentResponse>(response.data.equipment).getEdges().map(Equipment.fromEquipmentResponse);
      })
    );
}

export function getEquipmentById(apollo: Apollo, equipmentId: InventoryFilters): Observable<Equipment> {
  return apollo.watchQuery<{
    equipmentById: EquipmentResponse;
  }>({
    query: gql`
      query GetEquipmentById($equipmentId: UUID!) {
        equipmentById(equipmentId: $equipmentId) {
          id
          name
          code
          description
        }
      }
    `,
    variables: {
      equipmentId
    }
  })
    .valueChanges
    .pipe(
      map((response) => {
        return Equipment.fromEquipmentResponse(response.data.equipmentById);
      })
    );
}


