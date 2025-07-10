import { Component } from "@angular/core";
import { ContentSectionComponent } from "../../shared/content-section/content-section.component";
import { ResourceService } from "../../resources/services/resource.service";
import { HttpResourceRef } from "@angular/common/http";
import { Equipment } from "../../models/equipment";
import { Material } from "../../models/material";
import { SimpleTableComponent } from "../../shared/simple-table/simple-table.component";

export interface InventoryListData {
  id: string;
  name: string;
  code: string;
  description?: string;
  quantity?: number;
  unit?: number;
}

@Component({
  selector: "app-inventory-list",
  templateUrl: "./inventory-list.component.html",
  styleUrls: ["./inventory-list.component.scss"],
  imports: [ContentSectionComponent, SimpleTableComponent],
  standalone: true,
})
export class InventoryListComponent {
  protected equipment: HttpResourceRef<Equipment[]> = this.resourceService.equipment();
  protected materials: HttpResourceRef<Material[]> = this.resourceService.materials();

  constructor(
    private resourceService: ResourceService,
  ) {
  }
}
