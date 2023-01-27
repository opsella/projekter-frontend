import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Equipment } from "../equipment/models/equipment";
import { Page, Pageable } from "../shared/page";
import { Material } from "../materials/models/material";
import { EquipmentFilters, getAllEquipment, getEquipmentById } from "../queries/equipment-queries";
import { Apollo, gql } from "apollo-angular";
import { createEquipment, editEquipment } from "../queries/equipment-mutations";

export interface EquipmentResponse {
  id: string;
  name: string;
  code: string;
  description: string;
}

export interface MaterialsResponse {
  id: string;
  name: string;
  code: string;
  quantity: number;
  unit: number;
  description: string;
}

@Injectable({
  providedIn: "root",
})
export class InventoryApiService {

  constructor(private apollo: Apollo) {
  }

  public queryEquipment(filters: EquipmentFilters): Observable<Equipment[]> {
    return getAllEquipment(this.apollo, filters);
  }

  public getEquipmentById(equipmentId: string): Observable<Equipment> {
    return getEquipmentById(this.apollo, equipmentId);
  }

  public createEquipment(equipment: Equipment): void {
    createEquipment(this.apollo, equipment);
  }

  public async editEquipment(equipment: Equipment) {
    editEquipment(this.apollo, equipment);
  }

  public queryMaterials(filters: MaterialsFilters): Observable<Material[]> {
    return this.apollo.watchQuery<{
      materials: Page<Material>;
    }>({
      query: gql`
        query SearchAvailableMaterials($first: Int, $last: Int, $after: String, $before: String, $code: String, $description: String, $id: UUID) {
          materials(
            first: $first
            last: $last
            after: $after
            before: $before
            input: {
              code: $code
              descriptionContains: $description
              materialId: $id
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
        ...new Pageable<MaterialsFilters>(filters)
          .setFirst(10)
      }
    })
      .valueChanges
      .pipe(
        map((response) => {
          return Page.fromData<MaterialsResponse>(response.data.materials).getEdges().map(x => {
            return {
              id          : x.id,
              name        : x.name,
              code        : x.code,
              quantity    : x.quantity,
              unit        : x.unit,
              description : x.description
            } as Material;
          });
        })
      );
  }
}



export interface MaterialsFilters {
  id?: string | undefined;
  code?: string | undefined;
  description?: string | undefined;
}
