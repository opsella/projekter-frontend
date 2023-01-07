import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { InventoryEquipment, InventoryItem, InventorySupplies } from "../inventory/models/inventory-item";
import { environment } from "../../environments/environment";
import { Apollo, gql } from "apollo-angular";
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
export class InventoryDataService {

  constructor(private apollo: Apollo) {
  }

  public query(): Observable<InventoryItem[]> {
    if (environment.useFakeData) {
      return this.getFakeData();
    }

    return this.apollo.watchQuery<{
      equipment: Page<ResponseExample>;
    }>({
      query: gql`
        query SearchAvailableEquipment($first: Int, $last: Int, $after: String, $before: String, $code: String, $descriptionContains: String, $equipmentId: UUID) {
          equipment(
            first: $first
            last: $last
            after: $after
            before: $before
            input: {
              code: $code
              descriptionContains: $descriptionContains
              equipmentId: $equipmentId
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
        ...new Pageable<{
          descriptionContains?: string | undefined;
          code?: string | undefined;
          equipmentId?: string | undefined;
        }>({})
          .setFirst(10)
      }
    })
      .valueChanges
      .pipe(
        map((response) => {
          return Page.fromData<ResponseExample>(response.data.equipment).getEdges().map(x => {
            return {
              name        : x.name,
              code        : x.code,
              description : x.description
            } as InventoryItem;
          });
        })
      );
  }

  private getFakeData(): Observable<InventoryItem[]> {
    if (environment.returnFakeEmpty) {
      return of([
      ]);
    }

    return of([
            {
              name         : "PVC Pipes",
              code         : "PIPE_PVC_01",
              description  : "1.5\" PVC Pipe",
              manufacturer : "Rainbird",
              tags         : [
                "pipe",
                "pvc"
              ],
              quantity      : 100,
              unitOfMeasure : "ft"
            } as InventorySupplies,
            {
              name         : "Trencher",
              code         : "TREN01",
              description  : "Trench digging tool",
              manufacturer : "CAT",
              tags         : [
                "cat",
                "trenching"
              ],
            } as InventoryEquipment,
            {
              name         : "PVC Glue",
              code         : "GLUE_PVC_01",
              description  : "Glue for PVC pipe",
              manufacturer : "rainbird",
              tags         : [
                "pipe",
                "glue",
                "pvc"
              ],
              quantity      : 100,
              unitOfMeasure : "oz"
            } as InventorySupplies,
    ]);
  }
}
