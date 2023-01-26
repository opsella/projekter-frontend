import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DynamicExpansionTableComponent } from "./dynamic-expansion-table/dynamic-expansion-table.component";
import { CdkTableModule } from "@angular/cdk/table";
import { SharedModule } from "../shared/shared.module";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ExpansionContentDirective } from "./expansion-content.directive";
import { ExpansionContentComponent } from "./expansion-content/expansion-content.component";


@NgModule({
  declarations: [
    DynamicExpansionTableComponent, ExpansionContentDirective, ExpansionContentComponent
  ],
  exports : [DynamicExpansionTableComponent],
  imports : [
    CommonModule,
    CdkTableModule,
    SharedModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DynamicExpansionTableModule { }
