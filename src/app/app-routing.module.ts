import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageEmplyeesComponent } from './Admin/manage-emplyees/manage-emplyees.component';
import { LoginFormComponent } from './login-form/login-form.component';
//adding routs to components
const routes: Routes = [
  {path:'manageEmployees',component:ManageEmplyeesComponent},
  {path:'login',component:LoginFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ManageEmplyeesComponent,LoginFormComponent];

