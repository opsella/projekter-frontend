import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { InventoryCategoryFormGroup } from "../inventory-category-form-group";
import { InventoryCategoryFormBuilderService } from "../inventory-category-form-builder.service";

@Component({
  selector    : "app-inventory-supplies-creation",
  templateUrl : "./supplies-creation-page.component.html",
  styleUrls   : [
    "./supplies-creation-page.component.scss"
  ],
})
export class SuppliesCreationPageComponent {
  public categories = [
    "Tools",
    "Vehicles"
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private _categoryFormBuilder: InventoryCategoryFormBuilderService
  ) { }

  public itemInformationGroup = this._formBuilder.group({
    name: new FormControl("", [
      Validators.required
    ]),
    code: new FormControl("", [
      Validators.required
    ]),
    description : new FormControl(""),
    unit        : new FormControl("", [
      Validators.required
    ]),
    qty: new FormControl("", [
      Validators.required
    ])
  });

  public categoryCreationForm: FormGroup<InventoryCategoryFormGroup> = this._categoryFormBuilder.build();
}
