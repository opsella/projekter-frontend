import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, switchMap } from "rxjs";
import { loadEquipment, loadEquipmentSuccess, searchEquipment } from "./inventory.actions";
import { EquipmentDataService } from "../../equipment/equipment-data.service";

@Injectable()
export class InventoryEffects {
  public loadEquipment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadEquipment),
      switchMap(() => this.equipmentService.getEquipmentData({})
        .pipe(
          map(equipment => loadEquipmentSuccess({ payload: equipment })),
          catchError(() => EMPTY)
        ))
    );
  });

  public searchEquipment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchEquipment),
      switchMap((action) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - this should not be an error
        return this.equipmentService.getEquipmentData(action.query ?? {})
          .pipe(
            map(equipment => loadEquipmentSuccess({ payload: equipment })),
            catchError(() => EMPTY)
          );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private equipmentService: EquipmentDataService
  ) {
  }
}
