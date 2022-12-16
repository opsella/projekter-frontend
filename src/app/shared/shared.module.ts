import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownAvatarComponent } from './dropdown-avatar/dropdown-avatar.component';
import { MatSelectModule } from "@angular/material/select";
import { SetupPageWrapperComponent } from './setup-page-wrapper/setup-page-wrapper.component';
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { ListPageWrapperComponent } from './list-page-wrapper/list-page-wrapper.component';


@NgModule({
    declarations: [
        DropdownAvatarComponent,
        SetupPageWrapperComponent,
        FormWrapperComponent,
        ListPageWrapperComponent
    ],
    imports: [
        CommonModule,
        MatSelectModule,
        MatButtonModule,
        RouterModule
    ],
    exports: [
        DropdownAvatarComponent,
        SetupPageWrapperComponent,
        FormWrapperComponent,
        ListPageWrapperComponent
    ]
})
export class SharedModule { }
