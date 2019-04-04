import { Injectable, ViewChild } from '@angular/core';
import { HttpClient,HttpClientModule , HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
 public postData(obj){
console.log(obj);
    return this.http.post("http://localhost:3000/register",obj);

  }
}
