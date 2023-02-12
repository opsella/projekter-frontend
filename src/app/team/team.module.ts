import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeamListComponent } from "./team-list/team-list.component";
import { TeamRoutingModule } from "./team-routing.module";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations : [TeamListComponent],
  imports      : [
    CommonModule,
    TeamRoutingModule,
    SharedModule
  ]
})
export class TeamModule { }
