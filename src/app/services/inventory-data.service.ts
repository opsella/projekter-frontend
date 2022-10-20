import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventoryDataService {
  constructor() {}

  getData(retrievedData: boolean): Observable<InventoryItem[]> {
    if (retrievedData) {
      return of([
        {
          name: '',
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
