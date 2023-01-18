import { Component } from "@angular/core";
import { Material } from "../models/material";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MaterialsDataService } from "../materials-data.service";
import { Router } from "@angular/router";

@Component({
  selector    : "app-materials-edit",
  templateUrl : "./materials-edit.component.html",
  styleUrls   : ["./materials-edit.component.scss"]
})
export class MaterialsEditComponent {

  protected material: Material | undefined;
  public materialForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private materialDataService: MaterialsDataService,
    private router: Router
  ) {
    const formControls = {
      name        : [""],
      code        : [""],
      quantity    : [1],
      unit        : [""],
      description : [""]
    };

    this.material = this.router.getCurrentNavigation()?.extras?.state as Material;

    if (this.material) {
      formControls.name[0] = this.material.name;
      formControls.code[0] = this.material.code;
      formControls.quantity[0] = this.material.quantity;
      formControls.unit[0] = this.material.unit;
      formControls.description[0] = this.material.description;
    }

    this.materialForm = this.formBuilder.group(formControls);
  }

  protected handleSubmit() {
    if (this.material) {
      this.materialDataService.editMaterial();
    } else {
      this.materialDataService.createMaterial();
    }
  }

}
