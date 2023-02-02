import { Injectable } from "@angular/core";
import { EquipmentDataService } from "../../app/equipment/equipment-data.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EquipmentActions } from "./equipment.actions";
import { catchError, EMPTY, map, switchMap } from "rxjs";

@Injectable()
export class EquipmentEffects {
  public loadEquipment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EquipmentActions.loadEquipment),
      switchMap(() => this.equipmentService.getEquipmentData({})
        .pipe(
          map(equipment => ({ type: EquipmentActions.loadEquipment, payload: equipment })),
          catchError(() => EMPTY)
        ))
    );
  });

  // public createEquipment$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(EquipmentActions.createEquipment),
  //     mergeMap((value) => this.equipmentService.createEquipment(value))
  //   );
  // });

  constructor(
    private actions$: Actions,
    private equipmentService: EquipmentDataService
  ) {
  }
}
