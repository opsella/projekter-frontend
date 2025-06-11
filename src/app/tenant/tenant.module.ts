import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TenantRoutingModule } from "./tenant-routing.module";
import { TenantComponent } from "./tenant/tenant.component";
import { ContentSectionComponent } from "../shared/content-section/content-section.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations : [TenantComponent],
  imports      : [
    CommonModule,
    TenantRoutingModule,
    ContentSectionComponent,
    SharedModule
  ]
})
export class TenantModule { }
