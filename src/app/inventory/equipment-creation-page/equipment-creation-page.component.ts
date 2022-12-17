import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { InventoryCategoryFormBuilderService } from "../inventory-category-form-builder.service";

@Component({
  selector    : "app-equipment-creation-page",
  templateUrl : "./equipment-creation-page.component.html",
  styleUrls   : ["./equipment-creation-page.component.scss"],
})
export class EquipmentCreationPageComponent {
  public categories = ["Tools", "Vehicles"];

  constructor(
    private _formBuilder: FormBuilder,
    private _inventoryCategoryFormBuilder: InventoryCategoryFormBuilderService
  ) {}

  public itemInformationGroup = this._formBuilder.group({
    name        : new FormControl("", [Validators.required]),
    code        : new FormControl("", [Validators.required]),
    description : new FormControl("", [Validators.required]),
  });

  public categoryCreationForm = this._inventoryCategoryFormBuilder.build();
}
