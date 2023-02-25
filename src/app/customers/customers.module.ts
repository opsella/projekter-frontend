import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";
import { CustomerTableContentComponent } from "./customer-table-content/customer-table-content.component";
import { CustomerEditComponent } from "./customer-edit/customer-edit.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CustomerListComponent, CustomerTableContentComponent, CustomerEditComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
