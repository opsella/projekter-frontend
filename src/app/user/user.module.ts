import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    SettingsComponent,
    ProfileComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class UserModule { }
