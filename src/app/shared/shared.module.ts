import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownAvatarComponent } from "./dropdown-avatar/dropdown-avatar.component";
import { RouterModule } from "@angular/router";
import { PageWrapperComponent } from "./page-wrapper/page-wrapper.component";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { ExpansionTableComponent } from "./expansion-table/expansion-table/expansion-table.component";
import { CdkTableModule } from "@angular/cdk/table";
import { MatIconModule } from "@angular/material/icon";
import {
  ExpansionTableContentComponent
} from "./expansion-table/expansion-table-content/expansion-table-content.component";
import { ExpansionContentDirective } from "./expansion-table/expansion-table-content/expansion-content.directive";
import { TableFiltersComponent } from "./expansion-table/table-filters/table-filters.component";


@NgModule({
  declarations: [
    DropdownAvatarComponent,
    PageWrapperComponent,
    ExpansionTableComponent,
    ExpansionContentDirective,
    ExpansionTableContentComponent,
    TableFiltersComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule,
    CdkTableModule,
    MatIconModule,
  ],
  exports: [
    DropdownAvatarComponent,
    PageWrapperComponent,
    ExpansionTableComponent
  ]
})
export class SharedModule { }
