import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivateroutingModule } from './privaterouting.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { MybookingsComponent } from './mybookings/mybookings.component';
import { FaqComponent } from './faq/faq.component';

import { GetbookingsService } from './mybookings/getbookings.service';
import { AuthgaurdService } from './navbar/authgaurd.service';

@NgModule({
  declarations: [NavbarComponent, ProfileComponent,MybookingsComponent,FaqComponent],
  imports: [
    CommonModule,
 PrivateroutingModule ,
 ReactiveFormsModule,
  FormsModule
  ],
  providers: [GetbookingsService,AuthgaurdService]
})
export class PrivateModule { }
