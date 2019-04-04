import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {path: "register", 
  loadChildren:'./public/public.module#PublicModule'},
 

  {path: "navbar", 
  loadChildren:'./private/private.module#PrivateModule'}
  // {path:"login", component: LoginComponent},
  // {path:"register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
