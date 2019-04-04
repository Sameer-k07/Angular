import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetbookingsService {

  
  constructor(private http: HttpClient) { }
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
