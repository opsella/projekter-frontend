import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TemplatesListComponent } from "./templates-list/templates-list.component";
import { TemplatesRoutingModule } from "./templates-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations : [TemplatesListComponent],
  imports      : [
    CommonModule,
    TemplatesRoutingModule,
    SharedModule
  ]
})
export class TemplatesModule { }
