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

      // patch request made to update the profile form
  Updatevalue(id,params){
    
        return this.http.patch("http://localhost:3000/register/"+id, params);
    
      }

    // get request made to fetch the updated data from the localstorage
      show(id){
        return this.http.get("http://localhost:3000/register", {params:{
          "id":id
        }});
      }

      // get request made for fetching upcoming bookings
  getbookings (){
    return this.http.get('http://localhost:3000/booking');
  }

// get request made for fetching past bookings
  getpastbookings(){
    return this.http.get('http://localhost:3000/pastbooking');
  }
// get request made for fetching faq
  getfaq (){
    return this.http.get('http://localhost:3000/faqs');
  }

}
