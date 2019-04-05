import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthgaurdService } from './navbar/authgaurd.service';

const newroutes : Routes =[
  
  {
    path : "navbar",
    component : NavbarComponent,
    canActivate : [AuthgaurdService],  
    children: [  
      {
        path: 'profile',
        component: ProfileComponent
      },                        //<---- child components declared here
      {
        path: 'mybookings',
        component: MybookingsComponent
      },
      {
        path: 'faq',
        component: FaqComponent,
      }
    ]
  }
] 
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(newroutes)],
  exports: [RouterModule]
})
export class PrivateroutingModule { }
