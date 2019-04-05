import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GetbookingsService } from '../mybookings/getbookings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
Name : string;
user : any;
header : string;
newbookings;
pastbooking ;
totallength:any;
  constructor(private router : Router, private getbookingservice:GetbookingsService) { 
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange()) }

// the total no. of bookings are fetched from the past and upcoming bookings
  ngOnInit() {
    this.user = localStorage.getItem('user');
    // console.log(JSON.parse(this.user));
    const t = JSON.parse(this.user);
    this.Name = t[0].firstName;
    this.getbookingservice.getbookings().subscribe(response => {
      this.newbookings = response;
      // console.log(this.newbookings.length);
  
  this.getbookingservice.getpastbookings().subscribe(response => {
    this.pastbooking = response;
    // console.log(this.pastbooking.length );


this.totallength = this.newbookings.length+this.pastbooking.length ;
// console.log(this.totallength);
})
})
}

  
  logout(){
    localStorage.clear();
    this.router.navigate(['/register'])
  }

  mybookings() { 
    this.router.navigate(['navbar/mybookings']); 
    // console.log(this.totalCount); 
    } 
    faq() { 
    this.router.navigate(['navbar/faq']); 
    } 


    handleRouteChange = () => { 
      if (this.router.url.includes('authenticatedUser')) { 
      this.header = "PROFILE"; 
      } 
      if (this.router.url.includes('bookings')) { 
      this.header = "MY BOOKINGS"; 
      } 
      if (this.router.url.includes('faq')) { 
      this.header = "FAQs"; 
      } 
      };
    

}
