import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EquipmentDataService } from "../equipment-data.service";
import { Equipment } from "../models/equipment";
import { Router } from "@angular/router";
import { merge } from "lodash";
import { Subscription } from "rxjs";

@Component({
  selector    : "app-equipment-edit",
  templateUrl : "./equipment-edit.component.html",
  styleUrls   : ["./equipment-edit.component.scss"]
})
export class EquipmentEditComponent implements OnInit {
  protected equipmentId: string | undefined;
  protected equipment: Subscription | undefined;

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

    this.equipmentId = this.router.getCurrentNavigation()?.extras?.state?.["equipmentId"];

    if (this.equipment) {
      // formControls.name[0] = (this.equipment | async )?.name;
      // formControls.code[0] = this.equipment.code;
      // formControls.description[0] = this.equipment.description;
    }

    this.equipmentForm = this.formBuilder.group(formControls);
  }

  public async ngOnInit() {
    this.equipment = await this.equipmentDataService.getEquipmentById(this.equipmentId as string).subscribe();
  }

  protected async handleSubmit() {
    const equipmentValues = this.equipmentForm.value;

    if (this.equipment) {
      const updatedEquipment: Equipment = merge(this.equipment, equipmentValues);

      await this.equipmentDataService.editEquipment(updatedEquipment);
    } else {
      await this.equipmentDataService.createEquipment(equipmentValues);
    }
  }
}
