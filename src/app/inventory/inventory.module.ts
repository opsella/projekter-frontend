import {NgModule} from "@angular/core";
import {ItemsPageComponent} from "./items-page/items-page.component";
import {SetupPageComponent} from "./setup-page/setup-page.component";
import {CommonModule} from "@angular/common";
import {InventoryRoutingModule} from "./inventory-routing.module";
import {MatStepperModule} from "@angular/material/stepper";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatLegacyRadioModule as MatRadioModule} from "@angular/material/legacy-radio";
import {SuppliesCreationPageComponent} from "./supplies-creation-page/supplies-creation-page.component";
import {EquipmentCreationPageComponent} from "./equipment-creation-page/equipment-creation-page.component";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {MatLegacyTableModule as MatTableModule} from "@angular/material/legacy-table";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {SharedModule} from "../shared/shared.module";
import {
    InventoryCategoryCreationFormComponent
} from "./inventory-category-creation-form/inventory-category-creation-form.component";
import {InventoryCategoryFormBuilderService} from "./inventory-category-form-builder.service";

@NgModule({
    declarations: [
        ItemsPageComponent,
        SetupPageComponent,
        SuppliesCreationPageComponent,
        EquipmentCreationPageComponent,
        InventoryCategoryCreationFormComponent,
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
        SharedModule
    ],
    providers: [
        InventoryCategoryFormBuilderService
    ]
})
export class InventoryModule {
}
