import { Component } from "@angular/core";
import { EquipmentDataService } from "../equipment-data.service";
import { Equipment } from "../models/equipment";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Action } from "../../core/action-footer/action-footer.component";
import { map, Observable } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";

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
  public actions: Action[] = [];

  constructor(
    private equipmentDataService: EquipmentDataService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.equipmentForm = this.formBuilder.group({
      name        : [""],
      code        : [""],
      description : [""]
    });

    const routerClone = this.router;

    this.actions.push({
      text: "Add Equipment",
      async action() {
        await routerClone.navigate(["equipment/edit/new"]);
      }
    });
  }

  protected async viewEquipment(equipment: Equipment): Promise<void> {
    await this.router.navigateByUrl(
      `equipment/details/${equipment.name.toLowerCase()}${equipment.code.toLowerCase()}`, { state: { equipmentId: equipment.id } }
    );
  }

  protected async editEquipment(equipment: Equipment): Promise<void> {
    await this.router.navigateByUrl(
      `equipment/edit/${equipment.name.toLowerCase()}${equipment.code.toLowerCase()}`, { state: { equipmentId: equipment.id } }
    );
  }
}
