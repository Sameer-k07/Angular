import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, NgForm, FormGroup } from '@angular/forms';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  new_user={ 
    firstName:'', 
    Password:'', 
    lastName:'', 
    email:'', 
    phoneno:'', 
    address:'', 
    CnfPassword:'', 
    History:'', 
    id:'' 
    }
  @ViewChild('updateform') public updateForm : NgForm;
  constructor(private fb: FormBuilder , private updateservice: UpdateService, private router : Router) { }
  updateform = this.fb.group({
    'firstName': [JSON.parse(localStorage.getItem('user'))[0].firstName, Validators.required],
    'email': [JSON.parse(localStorage.getItem('user'))[0].email, Validators.required],
    'phoneno': [JSON.parse(localStorage.getItem('user'))[0].phoneno, Validators.required],
    'Address': [JSON.parse(localStorage.getItem('user'))[0].Address, Validators.required],
    'History': [JSON.parse(localStorage.getItem('user'))[0].History]
   
  });
  
  ngOnInit(){
  }

  onSubmit = function(user) {
this.new_user.firstName = this.updateform.get('firstName').value; 
this.new_user.email = this.updateform.get('email').value; 
this.new_user.phoneno = this.updateform.get('phoneno').value; 
this.new_user.Address = this.updateform.get('Address').value; 
this.new_user.History = this.updateform.get('History').value; 
this.new_user.Password = JSON.parse(localStorage.getItem('user'))[0].Password; 
this.new_user.CnfPassword = JSON.parse(localStorage.getItem('user'))[0].CnfPassword; 
this.new_user.lastName = JSON.parse(localStorage.getItem('user'))[0].lastName; 
this.new_user.id = JSON.parse(localStorage.getItem('user'))[0].id; 


this.updateservice.Updatevalue(JSON.parse(localStorage.getItem('user'))[0].id,user) 
.subscribe(( response=> { 
//localStorage.setItem("user",JSON.stringify(this.new_user)); 
console.log(response)})); 
this.updateservice.show(this.updateform.value).subscribe(response => { 
let temp = [this.updateform.value] 
localStorage.setItem('user',JSON.stringify(temp)); 
})
   
      this.updateservice.Updatevalue(JSON.parse(localStorage.getItem('user'))[0].id, user)
      .subscribe((response =>{console.log(response)}));
      
}

}
