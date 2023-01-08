import { Component } from "@angular/core";
import { EquipmentDataService } from "../equipment-data.service";
import { Equipment } from "../models/equipment";
import { map, Observable } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector    : "app-equipment-list",
  templateUrl : "./equipment-list.component.html",
  styleUrls   : ["./equipment-list.component.scss"]
})
export class EquipmentListComponent {
  private equipmentDataSource: MatTableDataSource<Equipment> = new MatTableDataSource<Equipment>([]);
  public equipmentDataSource$: Observable<MatTableDataSource<Equipment>> = this.equipmentDataService.getEquipmentData({
    id          : undefined,
    code        : undefined,
    description : undefined,
  })
    .pipe(
      map((items?: Equipment[]) => {
        this.equipmentDataSource.data = items ?? [];

        return this.equipmentDataSource;
      })
    );

  public equipmentForm: FormGroup;


  constructor(
    private equipmentDataService: EquipmentDataService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.equipmentForm = this.formBuilder.group({
      name: [
        ""
      ],
      code: [
        ""
      ],
      description: [
        ""
      ]
    });
  }
  protected async viewEquipment(equipment: Equipment): Promise<void> {
    await this.router.navigateByUrl(
      `equipment/details/${equipment.name.toLowerCase()}${equipment.code.toLowerCase()}`, { state: equipment }
    );
  }

  protected async editEquipment(): Promise<void> {
    const equipment = {
      name        : "Test",
      code        : "TT - 234234",
      description : "This is a Test"
    };

    await this.router.navigateByUrl(
      `equipment/edit/${equipment.name.toLowerCase()}${equipment.code.toLowerCase()}`, { state: equipment }
    );
  }

  protected async createEquipment(): Promise<void> {
    await this.router.navigate([
      "equipment/edit/new"
    ]);
  }
}
