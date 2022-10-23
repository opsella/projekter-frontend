import { NgModule } from "@angular/core";
import { ItemsPageComponent } from "./items-page/items-page.component";
import { SetupPageComponent } from "./setup-page/setup-page.component";
import { CommonModule } from "@angular/common";
import { InventoryRoutingModule } from "./inventory-routing.module";
import { MatStepperModule } from "@angular/material/stepper";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { SuppliesCreationPageComponent } from "./supplies-creation-page/supplies-creation-page.component";
import {
    EquipmentCreationPageComponent
} from "./equipment-creation-page/equipment-creation-page.component";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";

@NgModule({
    declarations: [
      ItemsPageComponent,
      SetupPageComponent,
      SuppliesCreationPageComponent,
      EquipmentCreationPageComponent,
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
