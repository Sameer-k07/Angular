import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }

  Updatevalue(id,params){
console.log(params);
    return this.http.patch("http://localhost:3000/register/"+id, params);

  }

  show(id){
    return this.http.get("http://localhost:3000/register", {params:{
      "id":id
    }});
  }
}
