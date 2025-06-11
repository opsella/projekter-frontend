import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';


import { UserRoutingModule } from './user-routing.module';
import { ContentSectionComponent } from '../shared/content-section/content-section.component';
import { MatButton } from '@angular/material/button';

@NgModule({
  declarations: [
    SettingsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    ContentSectionComponent,
    MatButton
  ]
})
export class UserModule { }
