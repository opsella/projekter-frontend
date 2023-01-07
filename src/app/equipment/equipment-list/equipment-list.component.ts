import { Component } from "@angular/core";
import { EquipmentListService } from "../equipment-list.service";
import { Equipment } from "../models/equipment";
import { map, Observable } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector    : "app-equipment-list",
  templateUrl : "./equipment-list.component.html",
  styleUrls   : [
    "./equipment-list.component.scss"
  ]
})
export class EquipmentListComponent {
  private equipmentDataSource: MatTableDataSource<Equipment> = new MatTableDataSource<Equipment>([
  ]);
  public equipmentDataSource$: Observable<MatTableDataSource<Equipment>> = this.equipmentListService.getEquipmentListData({
    code            : undefined,
    name            : undefined,
    description     : undefined,
    page            : 0,
    quantityPerPage : 25
  })
    .pipe(
      map((items?: Equipment[]) => {
        this.equipmentDataSource.data = items ?? [
        ];

        return this.equipmentDataSource;
      })
    );


  constructor(
    private equipmentListService: EquipmentListService
  ) {
  }
}
