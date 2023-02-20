import { Apollo, gql, MutationResult } from "apollo-angular";
import { Observable } from "rxjs";
import { Material } from "../models/material";

export function createMaterial(apollo: Apollo, material: Material): Observable<MutationResult<{ registerMaterial: {tenantId: string; materialId: string; name: string}}>> {
  return apollo.mutate<{
    registerMaterial: {tenantId: string; materialId: string; name: string};
  }>({
    mutation: gql`
      mutation RegisterMaterial($name: String!, $code: String!, $quantity: Int!, $description: String!) {
        registerMaterial(
          input: {
            materialName: $name
            materialCode: $code
            quantityOnHand: $quantity,
#            unit: $unit,
            materialDescription: $description
          }
        ) {
          tenantId
          materialId
          name
        }
      }
    `,
    variables: {
      ...material
    }
  });
}

export function editMaterial(apollo: Apollo, material: MaterialEditRequest): Observable<MutationResult<{ updateMaterial: { id: string }}>> {
  return apollo.mutate<{
    updateMaterial: {id: string};
  }>({
    mutation: gql`
      mutation UpdateMaterial($id: UUID!, $name: String, $code: String, $description: String) {
        updateMaterial(
          input: {
            materialId: $id,
            materialName: $name,
            materialCode: $code,
#            materialQuantity: $quantity,
#            materialUnit: $unit,
            materialDescription: $description,
          }
        ) {
          materialId
        }
      }
    `,
    variables: {
      ...material
    }
  });
}

export interface MaterialEditRequest {
  id: string;
  name: string | undefined;
  code: string | undefined;
  quantity: number;
  unit: number;
  description: string | undefined;
}
