import { ComponentStore } from "@ngrx/component-store";
import { InventoryDataService } from "../../inventory-data.service";
import { Injectable } from "@angular/core";
import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";
import { Equipment } from "../../../models/equipment";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export interface EquipmentEditFormState {
  status: "pending" | "loading" | "succeeded" | "failed";
  equipmentForm: FormGroup;
}

@Injectable()
export class EquipmentEditFormStore extends ComponentStore<EquipmentEditFormState> {
  constructor(
    private inventoryDataService: InventoryDataService,
    private formBuilder: FormBuilder
  ) {
    super({
      status        : "pending",
      equipmentForm : formBuilder.group({
        name        : new FormControl( "", [Validators.required]),
        code        : new FormControl("", Validators.required),
        description : new FormControl(""),
      })
    });
  }

  public readonly createInventory = this.effect<{
    values: Equipment;
  }>((
    filters$: Observable<{values: Equipment}>
  ) => {
    return filters$.pipe(
      switchMap(
        (formData) => this.inventoryDataService.mutateInventoryEquipment(formData.values).pipe(
          tap({
            next: (data) => {
              if (data?.data) {
                this.setStatusSucceeded();
                this.clearForm();
              } else {
                this.setStatusFailed();
              }
            },
            error: () => EMPTY
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  private readonly clearForm = this.updater((state) => {
    state.equipmentForm.reset();

    return {
      ...state
    };
  });

  public readonly setFormData = this.updater((state, data: Equipment) => {
    state.equipmentForm.patchValue(data);

    return  {
      ...state
    };
  });

  private readonly setStatusFailed = this.updater((state) => ({
    ...state,
    status: "failed"
  }));

  private readonly setStatusSucceeded = this.updater((state) => ({
    ...state,
    status: "succeeded"
  }));

  public readonly setStatusLoading = this.updater((state) => ({
    ...state,
    status: "loading"
  }));

  private readonly equipmentFormData$ = this.select(
    ({ equipmentForm }) => equipmentForm
  );

  private readonly status$ = this.select(
    ({ status }) => status
  );

  public readonly nameInputInvalid = this.select(({ equipmentForm }) => {
    const name = equipmentForm.get("name");
    return name?.invalid && (name?.dirty || name?.touched);
  });

  public readonly codeInputInvalid = this.select(({ equipmentForm }) => {
    const code = equipmentForm.get("code");
    return code?.invalid && (code?.dirty || code?.touched);
  });

  public readonly vm$ = this.select({
    status           : this.status$,
    equipmentForm    : this.equipmentFormData$,
    nameInputInvalid : this.nameInputInvalid,
    codeInputInvalid : this.codeInputInvalid
  });
}
