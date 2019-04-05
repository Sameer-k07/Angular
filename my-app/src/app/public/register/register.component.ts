import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, NgForm,Validators } from '@angular/forms';


import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

// this component is made for the registeration form
export class RegisterComponent implements OnInit {
  userdata;
  alert : string= "Field required!";
  @ViewChild('profileForm') public loginForm : NgForm;
  constructor(private fb: FormBuilder ,private registerservice :RegisterService, private router : Router) { }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    phoneno: ['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
    Address: ['', Validators.required],
    History: [''],
    Password: ['', Validators.required],
    CnfPassword: ['', Validators.required],
   
  });
  //on click of register button the function is being executed in which details are being posted
//   and the route is navigated to the navbar/profile
  onSubmit = function(myuser) {
    
      this.registerservice.postData(this.profileForm.value).subscribe(data =>{
        this.userdata = data;
        this.router.navigate(['/login']);
      })
}

ngOnInit(){
}
}
