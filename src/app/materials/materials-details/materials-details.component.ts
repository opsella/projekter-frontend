import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Material } from "../models/material";

@Component({
  selector    : "app-materials-details",
  templateUrl : "./materials-details.component.html",
  styleUrls   : ["./materials-details.component.scss"]
})
export class MaterialsDetailsComponent {
  protected material: Material | undefined;

  constructor(
    private router: Router,
    // private materialsDataService: MaterialsDataService
  ) {
    this.material = this.router.getCurrentNavigation()?.extras.state as Material;

    // const filters = this.router.getCurrentNavigation()?.extras.state;
    // this.materialsDataService.getMaterialsData(filters as MaterialsFilters);
  }

}
