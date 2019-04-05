import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { GetServiceService } from './public/login/get-service.service';
// import { RegisterService } from './public/register/register.service';



@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    PublicModule,
    PrivateModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
