import { ComponentStore } from "@ngrx/component-store";
import { InventoryDataService } from "../../inventory-data.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Material } from "../../../models/material";

export interface MaterialEditFormState {
  status: "pending" | "loading" | "succeeded" | "failed";
  materialForm: FormGroup;
}

@Injectable()
export class MaterialEditFormStore extends ComponentStore<MaterialEditFormState> {
  constructor(
    private inventoryDataService: InventoryDataService,
    private formBuilder: FormBuilder
  ) {
    super({
      status       : "pending",
      materialForm : formBuilder.group({
        name        : new FormControl( "", [Validators.required]),
        code        : new FormControl("", Validators.required),
        quantity    : new FormControl(1, Validators.required),
        unit        : new FormControl("", Validators.required),
        description : new FormControl(""),
      })
    });
  }

  public readonly createInventory = this.effect<{
    values: Material;
  }>((
    filters$: Observable<{values: Material}>
  ) => {
    return filters$.pipe(

    );
  });

  private readonly clearForm = this.updater((state) => {
    state.materialForm.reset();

    return {
      ...state
    };
  });

  public readonly setFormData = this.updater((state, data: Material) => {
    state.materialForm.patchValue(data);

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

  private readonly materialFormData$ = this.select(
    ({ materialForm }) => materialForm
  );

  private readonly status$ = this.select(
    ({ status }) => status
  );

  public readonly nameInputInvalid = this.select(({ materialForm }) => {
    const name = materialForm.get("name");
    return name?.invalid && (name?.dirty || name?.touched);
  });

  public readonly codeInputInvalid = this.select(({ materialForm }) => {
    const code = materialForm.get("code");
    return code?.invalid && (code?.dirty || code?.touched);
  });

  public readonly quantityInputInvalid = this.select(({ materialForm }) => {
    const quantity = materialForm.get("quantity");
    return quantity?.invalid && (quantity?.dirty || quantity?.touched);
  });

  public readonly unitInputInvalid = this.select(({ materialForm }) => {
    const unit = materialForm.get("unit");
    return unit?.invalid && (unit?.dirty || unit?.touched);
  });

  public readonly vm$ = this.select({
    status               : this.status$,
    materialForm         : this.materialFormData$,
    nameInputInvalid     : this.nameInputInvalid,
    codeInputInvalid     : this.codeInputInvalid,
    quantityInvalidInput : this.quantityInputInvalid,
    unitInvalidInput     : this.unitInputInvalid
  });
}
