import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, switchMap } from "rxjs";
import { loadInventoryItemDetails, loadInventoryItemDetailsSuccess } from "./all-inventory.actions";
import { InventoryDataService } from "../../inventory/inventory-data.service";

@Injectable()
export class AllInventoryEffects {
  public loadInventoryItemDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadInventoryItemDetails),
      switchMap((action) => this.inventoryService.getInventoryItemById(action?.itemId ?? {})
        .pipe(
          map(inventoryItem => loadInventoryItemDetailsSuccess({ payload: inventoryItem })),
          catchError(() => EMPTY)
        ))
    );
  });

  constructor(
    private actions$: Actions,
    private inventoryService: InventoryDataService
  ) {
  }
}
