import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {PublicRoutingModule} from './public-routing.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { from } from 'rxjs';
import { ConfirmPasswordDirective } from './register/passwordcheck/confirmpass.directive';
import { GetServiceService } from './login/get-service.service';
import { RegisterService } from './register/register.service';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ConfirmPasswordDirective],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [GetServiceService,RegisterService ]
})
export class PublicModule { }
