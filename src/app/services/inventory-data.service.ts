import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { InventoryEquipment, InventoryItem, InventorySupplies } from "../inventory/models/inventory-item";
import { environment } from "../../environments/environment";
import { Apollo, gql } from "apollo-angular";
import { HttpHeaders } from "@angular/common/http";
import { AuthService } from "@auth0/auth0-angular";

@Injectable({
  providedIn: "root",
})
export class InventoryDataService {

  constructor(private apollo: Apollo,
              private auth: AuthService) {
  }

  public query(): Observable<InventoryItem[]> {
    if (environment.useFakeData) {
      return this.getFakeData();
    }

    return this.apollo.watchQuery<{
      materials: {
        page: number;
        quantityPerPage: number;
        materials: {
          id: string;
          name: string;
          code: string;
          description: string;
        }[];
      };
    }>({
      query: gql`
        query SearchAvailableMaterials($tenant: UUID!) {
          materials(query: {
            tenantId: $tenant
            page: 0
            quantityPerPage: 50
          }) {
            page
            quantityPerPage
            materials {
              id
              name
              code
              description
            }
          }
        }
      `,
      variables: {
        tenant: "2fd721b8-34d5-480b-8177-71df1acada9f"
      },
      context: {
        headers: new HttpHeaders()
          .set("x-tenant", "2fd721b8-34d5-480b-8177-71df1acada9f")
      }
    })
      .valueChanges
      .pipe(
        map((data) => {
          return data.data.materials.materials.map(x => {
            return {
              name        : x.name,
              code        : x.code,
              description : x.description,
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
