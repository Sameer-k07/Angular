import { Component, OnInit, ViewChild } from '@angular/core';
import { GetServiceService } from './get-service.service';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupform: FormGroup;
  credentials = {
    email:"",
    Password:""
  }
  constructor(private getservice : GetServiceService, private router: Router, private fb : FormBuilder) {
  this.signupform = fb.group({
    email: ['', Validators.required],
    password: ['', this.textValidator]
  });
}

    ngOnInit() {
    
  }
  textValidator(detail){
    if(detail.value.length < 3)
    {
      return {'password' :true};
    }

  }
details;
  login = function(user)
  {
    user;
    this.credentials.email = this.signupform.get('email').value;
    this.credentials.Password = this.signupform.get('password').value;
    this.getservice.getreq(this.credentials).subscribe(response => {
      this.details = response;
     console.log(response);
     if((Object.keys(response).length) == 0)
     {
       console.log('invalid user');
     }
     else 
     {
       localStorage.setItem('user', JSON.stringify(response));
       localStorage.setItem('user_cred', "true");
       console.log("valid user");
       this.router.navigate(['/navbar/profile']);
     }
    
  }
     );
  }

}
