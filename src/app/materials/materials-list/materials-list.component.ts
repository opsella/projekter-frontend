import { Component } from "@angular/core";
import { Material } from "../models/material";
import { MaterialsDataService } from "../materials-data.service";
import { MatTableDataSource } from "@angular/material/table";
import { map, Observable } from "rxjs";

@Component({
  selector    : "app-materials-list",
  templateUrl : "./materials-list.component.html",
  styleUrls   : [
    "./materials-list.component.scss"
  ]
})
export class MaterialsListComponent {
  private materialsDataSource: MatTableDataSource<Material> = new MatTableDataSource<Material>([
  ]);
  public materialDataSource$: Observable<MatTableDataSource<Material>> = this.materialsDataService.getMaterialsData({
    id          : undefined,
    code        : undefined,
    description : undefined,
  })
    .pipe(
      map((items?: Material[]) => {
        this.materialsDataSource.data = items ?? [
        ];

        return this.materialsDataSource;
      })
    );

  constructor(
    private materialsDataService: MaterialsDataService,
  ) {
  }
}
