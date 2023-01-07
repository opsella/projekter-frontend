import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { MatIconModule } from "@angular/material/icon";
import { NavigationRouteElementComponent } from "./top-nav/navigation-route-element/navigation-route-element.component";

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    MainContentComponent,
    NavigationRouteElementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatIconModule
  ],
  exports: [
    TopNavComponent,
    SideNavComponent,
    MainContentComponent
  ],
})
export class CoreModule {}
