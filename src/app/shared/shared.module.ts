import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownAvatarComponent } from "./dropdown-avatar/dropdown-avatar.component";
import { RouterModule } from "@angular/router";
import { FormWrapperComponent } from "./form-wrapper/form-wrapper.component";
import { PageWrapperComponent } from "./page-wrapper/page-wrapper.component";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    DropdownAvatarComponent,
    FormWrapperComponent,
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
    FormWrapperComponent,
    PageWrapperComponent
  ]
})
export class SharedModule { }
