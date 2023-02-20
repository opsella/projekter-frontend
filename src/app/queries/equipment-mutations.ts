import { Apollo, gql, MutationResult } from "apollo-angular";
import { Equipment } from "../models/equipment";
import { Observable } from "rxjs";

export function createEquipment(apollo: Apollo, equipment: Equipment): Observable<MutationResult<{ registerEquipment: {tenantId: string; equipmentId: string; name: string}}>> {
  return apollo.mutate<{
    registerEquipment: {tenantId: string; equipmentId: string; name: string};
  }>({
    mutation: gql`
      mutation RegisterEquipment($name: String!, $code: String!, $description: String!) {
        registerEquipment(
          input: {
            equipmentName: $name
            equipmentCode: $code
            equipmentDescription: $description
          }
        ) {
          tenantId
          equipmentId
          name
        }
      }
    `,
    variables: {
      ...equipment
    }
  });
}

export function editEquipment(apollo: Apollo, equipment: EquipmentEditRequest): Observable<MutationResult<{ updateEquipment: { id: string }}>> {
  return apollo.mutate<{
    updateEquipment: {id: string};
  }>({
    mutation: gql`
      mutation UpdateEquipment($id: UUID!, $name: String, $code: String, $description: String) {
        updateEquipment(
          input: {
            id: $id,
            equipmentName: $name,
            equipmentCode: $code,
            equipmentDescription: $description,
          }
        ) {
          id
        }
      }
    `,
    variables: {
      ...equipment
    }
  });
}

export interface EquipmentEditRequest {
  id: string;
  name: string | undefined;
  code: string | undefined;
  description: string | undefined;
}
