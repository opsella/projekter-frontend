import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
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
import { CardComponent } from "./card/card.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { DropdownAvatarComponent } from "./dropdown-avatar/dropdown-avatar.component";


@NgModule({
  declarations: [
    PageWrapperComponent,
    ExpansionTableComponent,
    ExpansionContentDirective,
    ExpansionTableContentComponent,
    TableFiltersComponent,
    CardComponent,
    AvatarComponent,
    DropdownAvatarComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule,
    CdkTableModule,
    MatIconModule,
    NgOptimizedImage
  ],
  exports: [
    PageWrapperComponent,
    ExpansionTableComponent,
    CardComponent,
    AvatarComponent,
    DropdownAvatarComponent
  ]
})
export class SharedModule {
}
