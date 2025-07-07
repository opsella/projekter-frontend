import { Injectable } from "@angular/core";
import { HttpClient, httpResource, HttpResourceRef } from "@angular/common/http";
import { Equipment, EquipmentResponse } from "../../models/equipment";
import { environment } from "../../../environments/environment";
import { ApiResponse, PaginatedApiResponse } from "../../models/api/api-response";
import { EquipmentId } from "../../models/ids/equipment-id";
import { Material, MaterialResponse } from "../../models/material";
import { MaterialId } from "../../models/ids/material-id";

@Injectable({
  providedIn: "root"
})
export class ResourceService {

  constructor() { }

  public equipment: () => HttpResourceRef<Equipment[]> = () => {
    return httpResource<Equipment[]>(
      () => ({
        url: `${environment.projekterApi}/equipment`,
      }),
      {
        parse: (result: PaginatedApiResponse<EquipmentResponse>)=> {
          return result.data?.map((equipment) => {
            return Equipment.fromResponse(equipment);
          });
        }
      }
    );
  }

  public equipmentById: (equipmentId: EquipmentId) => HttpResourceRef<Equipment> = (equipmentId: EquipmentId) => {
    return httpResource<Equipment>(
      () => ({
        url: `${environment.projekterApi}/equipment/${equipmentId}`,
      }),
      {
        parse: (result: ApiResponse<EquipmentResponse>) => {
          return Equipment.fromResponse(result.data)
        }
      }
    )
  }

  public materials: () => HttpResourceRef<Material[]> = () => {
    return httpResource<Material[]>(
      () => ({
        url: `${environment.projekterApi}/material`,
      }),
      {
        parse: (result: PaginatedApiResponse<MaterialResponse>) => {
          return result.data?.map((materials) => {
            return Material.fromResponse(materials);
          });
        }
      }
    )
  }

  public materialById: (materialId: MaterialId) => HttpResourceRef<Material> = (materialId: MaterialId) => {
    return httpResource<Material>(
      () => ({
        url: `${environment.projekterApi}/material/${materialId}`,
      }),
      {
        parse: (result: ApiResponse<MaterialResponse>) => {
          return Material.fromResponse(result.data)
        }
      }
    )
  }
}


