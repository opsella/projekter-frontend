import { NgModule } from "@angular/core";
import { InventoryListPageComponent } from "./inventory-list-page/inventory-list-page.component";
import { InventorySetupPageComponent } from "./inventory-setup-page/inventory-setup-page.component";
import { CommonModule } from "@angular/common";
import { InventoryRoutingModule } from "./inventory-routing.module";
import { MatStepperModule } from "@angular/material/stepper";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { InventorySuppliesCreationComponent } from "./inventory-supplies-creation/inventory-supplies-creation.component";
import {
    InventoryEquipmentCreationComponent
} from "./inventory-equipment-creation/inventory-equipment-creation.component";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";

@NgModule({
    declarations: [
      InventoryListPageComponent,
      InventorySetupPageComponent,
      InventorySuppliesCreationComponent,
      InventoryEquipmentCreationComponent
    ],
  imports: [
    CommonModule,
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
  ],
})
export class InventoryModule {}
