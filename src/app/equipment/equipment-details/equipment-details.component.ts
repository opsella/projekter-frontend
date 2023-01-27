import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Equipment } from "../models/equipment";
import { EquipmentDataService } from "../equipment-data.service";
import { Observable } from "rxjs";

@Component({
  selector    : "app-equipment-view",
  templateUrl : "./equipment-details.component.html",
  styleUrls   : ["./equipment-details.component.scss"]
})
export class EquipmentDetailsComponent implements OnInit {

  protected equipment: Observable<Equipment> | undefined;
  private readonly equipmentId: string;

  constructor(
    private router: Router,
    private equipmentDataService: EquipmentDataService
  ) {
    this.equipmentId = this.router.getCurrentNavigation()?.extras.state?.["equipmentId"];
  }

  public async ngOnInit() {
    this.equipment = await this.equipmentDataService.getEquipmentById(this.equipmentId);
  }
}
