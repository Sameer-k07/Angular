import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GetServiceService {

  constructor(private http: HttpClient) { }
  //To fetch the data which is being registered by the component
  getreq(parameter){
    return this.http.get('http://localhost:3000/register',{params : parameter});
  }
}
