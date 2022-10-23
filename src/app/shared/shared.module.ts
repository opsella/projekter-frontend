import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownAvatarComponent } from './dropdown-avatar/dropdown-avatar.component';
import {MatSelectModule} from "@angular/material/select";


@NgModule({
    declarations: [
        DropdownAvatarComponent
    ],
    imports: [
        CommonModule,
        MatSelectModule
    ],
    exports: [
        DropdownAvatarComponent
    ]
})
export class SharedModule { }
