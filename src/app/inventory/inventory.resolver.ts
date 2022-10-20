import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot, } from '@angular/router'
import { Observable, tap } from 'rxjs'
import { InventoryDataService, InventoryItem, } from '../services/inventory-data.service'

@Injectable({
  providedIn: 'root',
})
export class InventoryResolver implements Resolve<InventoryItem[]> {
  constructor(
    private inventoryData: InventoryDataService,
    private route: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<InventoryItem[]> {
    return this.inventoryData.getData(true).pipe(
      tap(async (inventoryItem) => {
        if (inventoryItem.length === 0) {
          await this.route.navigate(['/inventory/setup']);
        }
      })
    );
  }
}
