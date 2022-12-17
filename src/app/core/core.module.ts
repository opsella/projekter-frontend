import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    MainContentComponent,
    FooterComponent,
  ],
  imports : [CommonModule, RouterModule, SharedModule],
  exports : [
    TopNavComponent,
    SideNavComponent,
    MainContentComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
