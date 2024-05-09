import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingModeulRoutingModule } from './setting-modeul-routing.module';
import { ForgetComponent } from './forget/forget.component';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForgetComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    SettingModeulRoutingModule ,
    ReactiveFormsModule
  ]
})
export class SettingModeulModule { }
