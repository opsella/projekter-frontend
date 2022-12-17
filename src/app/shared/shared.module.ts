import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownAvatarComponent } from './dropdown-avatar/dropdown-avatar.component';
import { MatLegacySelectModule as MatSelectModule } from "@angular/material/legacy-select";
import { SetupPageWrapperComponent } from './setup-page-wrapper/setup-page-wrapper.component';
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { RouterModule } from "@angular/router";
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';


@NgModule({
    declarations: [
        DropdownAvatarComponent,
        SetupPageWrapperComponent,
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
        SetupPageWrapperComponent,
        FormWrapperComponent,
        PageWrapperComponent
    ]
})
export class SharedModule { }
