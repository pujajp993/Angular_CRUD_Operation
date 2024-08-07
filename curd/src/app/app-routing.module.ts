import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewallComponent } from './viewall/viewall.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path:'reg',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'viewall',component:ViewallComponent},
  {path:'edit',component:EditComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
