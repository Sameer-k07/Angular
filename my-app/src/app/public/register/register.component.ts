import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, NgForm,Validators } from '@angular/forms';


import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userdata;
  alert : string= "Field required!";
  @ViewChild('profileForm') public loginForm : NgForm;
  constructor(private fb: FormBuilder ,private registerservice :RegisterService, private router : Router) { }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phoneno: ['', Validators.required],
    Address: ['', Validators.required],
    History: [''],
    Password: ['', Validators.required],
    CnfPassword: ['', Validators.required],
   
  });
  
// {
//   alert("Enter valid values")
// }

  onSubmit = function(myuser) {
    // if(this.profileForm.status=="VALID"){
    //   console.log("form submitted");
      this.registerservice.postData(this.profileForm.value).subscribe(data =>{
        this.userdata = data;
        // console.log(this.profileForm.value.email);
        
        this.router.navigate(['/login']);
      })
      
      

  
}

ngOnInit(){


}



}
