import { map, Observable } from "rxjs";
import { Material } from "../models/material";
import { Page, Pageable } from "../shared/page";
import { Apollo, gql } from "apollo-angular";
import { MaterialsResponse } from "../services/inventory-api.service";
import { InventoryFilters } from "../inventory/inventory-data.service";

export interface MaterialsFilters {
  id?: string | undefined;
  code?: string | undefined;
  description?: string | undefined;
}

export function getAllMaterials(apollo: Apollo, filters: MaterialsFilters): Observable<Material[]> {
  return apollo.watchQuery<{
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
        return Page.fromData<MaterialsResponse>(response.data.materials).getEdges().map(Material.fromMaterialResponse);
      })
    );
}

export function getMaterialById(apollo: Apollo, materialId: InventoryFilters): Observable<Material> {
  return apollo.watchQuery<{
    materialId: MaterialsResponse;
  }>({
    query: gql`
      query GetMaterialById($materialId: UUID!) {
        materialById(materialId: $materialId) {
          id
          name
          code
          description
        }
      }
    `,
    variables: {
      materialId
    }
  })
    .valueChanges
    .pipe(
      map((response) => {
        return Material.fromMaterialResponse(response.data.materialId);
      })
    );
}
