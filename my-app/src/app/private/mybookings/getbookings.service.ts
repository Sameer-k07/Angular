import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetbookingsService {

  
  constructor(private http: HttpClient) { }

  public postData(obj){
    console.log(obj);
        return this.http.post("http://localhost:3000/register",obj);
    
      }
  Updatevalue(id,params){
    
        return this.http.patch("http://localhost:3000/register/"+id, params);
    
      }
    
      show(id){
        return this.http.get("http://localhost:3000/register", {params:{
          "id":id
        }});
      }
  getbookings (){
    return this.http.get('http://localhost:3000/booking');
  }
  getpastbookings(){
    return this.http.get('http://localhost:3000/pastbooking');
  }
  getfaq (){
    return this.http.get('http://localhost:3000/faqs');
  }

}
