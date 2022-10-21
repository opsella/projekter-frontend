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
                },
                {
                    name: "Equipment 2",
                },
                {
                    name: "Equipment 3",
                },
                {
                    name: "Equipment 4",
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
