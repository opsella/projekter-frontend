import { Injectable } from "@angular/core";
import { Equipment } from "./models/equipment";
import { map, Observable } from "rxjs";
import { Apollo, gql } from "apollo-angular";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EquipmentListService {
  constructor(private apollo: Apollo) {}

  public getEquipmentListData(filters: EquipmentListFilters): Observable<Equipment[]> {
    return this.apollo.watchQuery<{
      equipment: {
        page: number;
        quantityPerPage: number;
        equipment: {
          id: string;
          name: string;
          code: string;
          description: string;
        }[];
      };
    }>({
      query: gql`
        query SearchAvailableEquipment($code: String, $description: String, $page: Int!, $quantityPerPage: Int!) {
          equipment(input: {
            code: $code,
            descriptionContains: $description,
            page: $page,
            quantityPerPage: $quantityPerPage
          }) {
            page
            quantityPerPage
            equipment {
              id
              name
              code
              description
            }
          }
        }
      `,
      variables: {
        tenant: "2fd721b8-34d5-480b-8177-71df1acada9f",
        ...filters
      },
      context: {
        headers: new HttpHeaders()
          .set("x-tenant", "2fd721b8-34d5-480b-8177-71df1acada9f")
      }
    })
      .valueChanges
      .pipe(
        map((data) => {
          return data.data.equipment.equipment.map(x => {
            return {
              name        : x.name,
              code        : x.code,
              description : x.description,
            } as Equipment;
          });
        })
      );
  }
}

export interface EquipmentListFilters {
  code: string | undefined;
  name: string | undefined;
  description: string | undefined;
  page: number;
  quantityPerPage: number;
}
