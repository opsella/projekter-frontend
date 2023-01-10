import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Equipment } from "../models/equipment";

@Component({
  selector    : "app-equipment-view",
  templateUrl : "./equipment-details.component.html",
  styleUrls   : ["./equipment-details.component.scss"]
})
export class EquipmentDetailsComponent {

  protected equipment: Equipment | undefined;

  constructor(
    private router: Router,
    // private equipmentDataService: EquipmentDataService
  ) {
    this.equipment = this.router.getCurrentNavigation()?.extras.state as Equipment;

    // const filters = this.router.getCurrentNavigation()?.extras.state;
    // this.equipmentDataService.getEquipmentData(filters as EquipmentFilters);
  }
}
