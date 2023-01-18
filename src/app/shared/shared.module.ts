import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownAvatarComponent } from "./dropdown-avatar/dropdown-avatar.component";
import { RouterModule } from "@angular/router";
import { PageWrapperComponent } from "./page-wrapper/page-wrapper.component";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    DropdownAvatarComponent,
    PageWrapperComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    DropdownAvatarComponent,
    PageWrapperComponent
  ]
})
export class SharedModule { }
