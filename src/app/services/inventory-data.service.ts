import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { InventoryEquipment, InventoryItem, InventorySupplies } from "../inventory/models/inventory-item";
import { environment } from "../../environments/environment";
import { NotImplementedException } from "../shared/not-implemented-exception";

@Injectable({
  providedIn: "root",
})
export class InventoryDataService {
  public query(): Observable<InventoryItem[]> {
    if (environment.useFakeData) {
      return this.getFakeData();
    }

    throw new NotImplementedException();
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
