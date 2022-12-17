import { Injectable } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {
  InventoryCategoryFormGroup,
  InventoryExistingCategoryFormGroup,
  InventoryNewCategoryFormGroup
} from "./inventory-category-form-group";
import { onlyOneValidator } from "../shared/only-one.validator";

@Injectable()
export class InventoryCategoryFormBuilderService {

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  public build(): FormGroup<InventoryCategoryFormGroup> {
    return this._formBuilder.group<InventoryCategoryFormGroup>({
      existingCategory: this._formBuilder.group<InventoryExistingCategoryFormGroup>({
        category: new FormControl<string | null>(null, [Validators.required])
      }),
      newCategory: this._formBuilder.group<InventoryNewCategoryFormGroup>({
        name: new FormControl<string>("", {
          validators  : [Validators.required],
          nonNullable : true,
        }),
        description: new FormControl<string>("", {
          validators  : [Validators.required],
          nonNullable : true,
        })
      })
    }, {
      validators: [
        onlyOneValidator(["existingCategory", "newCategory"])
      ],
    });
  }
}
