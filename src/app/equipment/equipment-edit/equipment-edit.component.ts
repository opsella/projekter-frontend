import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EquipmentDataService } from "../equipment-data.service";
import { Equipment } from "../models/equipment";
import { Router } from "@angular/router";

@Component({
  selector    : "app-equipment-edit",
  templateUrl : "./equipment-edit.component.html",
  styleUrls   : ["./equipment-edit.component.scss"]
})
export class EquipmentEditComponent {
  protected equipment: Equipment | undefined;

  public equipmentForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private equipmentDataService: EquipmentDataService,
    private router: Router
  ) {
    const formControls = {
      name        : [""],
      code        : [""],
      description : [""]
    };

    this.equipment = this.router.getCurrentNavigation()?.extras?.state as Equipment;

    if (this.equipment) {
      formControls.name[0] = this.equipment.name;
      formControls.code[0] = this.equipment.code;
      formControls.description[0] = this.equipment.description;
    }

    this.equipmentForm = this.formBuilder.group(formControls);
  }

  protected handleSubmit() {
    if (this.equipment) {
      this.equipmentDataService.editEquipment();
    } else {
      this.equipmentDataService.createEquipment();
    }
  }
}
