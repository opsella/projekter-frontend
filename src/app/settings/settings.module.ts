import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsListComponent } from "./settings-list/settings-list.component";
import { SharedModule } from "../shared/shared.module";
import { SettingsRoutingModule } from "./settings-routing.module";


@NgModule({
  declarations : [SettingsListComponent],
  imports      : [
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
