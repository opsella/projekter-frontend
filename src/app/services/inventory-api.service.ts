import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Apollo, gql } from "apollo-angular";
import { Equipment } from "../equipment/models/equipment";
import { Page, Pageable } from "../shared/page";

export interface ResponseExample {
  id: string;
  name: string;
  code: string;
  description: string;
}

@Injectable({
  providedIn: "root",
})
export class InventoryApiService {

  constructor(private apollo: Apollo) {
  }

  public queryEquipment(filters: EquipmentFilters): Observable<Equipment[]> {
    return this.apollo.watchQuery<{
      equipment: Page<Equipment>;
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
          return Page.fromData<ResponseExample>(response.data.equipment).getEdges().map(x => {
            return {
              id          : x.id,
              name        : x.name,
              code        : x.code,
              description : x.description
            } as Equipment;
          });
        })
      );
  }
}

export interface EquipmentFilters {
  id: string | undefined;
  code: string | undefined;
  description: string | undefined;
}
