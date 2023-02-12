import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InventoryRoutingModule } from "./inventory-routing.module";
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { InventoryCategoryFormBuilderService } from "./inventory-category-form-builder.service";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";
import { MatIconModule } from "@angular/material/icon";
import { ExpansionDetailComponent } from "./expansion-detail/expansion-detail.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { InventoryDetailsComponent } from "./inventory-details/inventory-details.component";
import { EquipmentTableContentComponent } from "./equipment-table-content/equipment-table-content.component";
import { MaterialsTableContentComponent } from "./materials-table-content/materials-table-content.component";
import { EquipmentDetailsComponent } from "./equipment-details/equipment-details.component";
import { MaterialDetailsComponent } from "./material-details/material-details.component";

@NgModule({
  declarations: [
    InventoryListComponent,
    ExpansionDetailComponent,
    InventoryDetailsComponent,
    EquipmentTableContentComponent,
    MaterialsTableContentComponent,
    EquipmentDetailsComponent,
    MaterialDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InventoryRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    SharedModule,
    MatIconModule
  ],
  providers: [InventoryCategoryFormBuilderService]
})
export class InventoryModule {
}
