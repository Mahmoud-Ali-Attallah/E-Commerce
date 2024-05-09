import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './forget/forget.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path :'forget' , component:ForgetComponent , title:"forget"} ,
  {path:"update" , component:UpdateComponent , title:"update"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingModeulRoutingModule { }
