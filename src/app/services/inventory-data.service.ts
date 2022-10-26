import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class InventoryDataService {
    constructor() {}

    public getData(retrievedData: boolean): Observable<InventoryItem[]> {
        if (retrievedData) {
            return of([
                {
                    name: "Equipment 1",
                    code: "3434523",
                    description: "The first equipment"
                },
                {
                    name: "Equipment 2",
                    code: "34234234",
                    description: "The second equipment"
                },
                {
                    name: "Equipment 3",
                    code: "9038023",
                    description: "The third equipment"
                },
                {
                    name: "Equipment 4",
                    code: "34509809",
                    description: "The forth equipment"
                },
            ]);
        } else {
            return of([]);
        }
    }
}

export interface InventoryItem {
  name: string;
}
