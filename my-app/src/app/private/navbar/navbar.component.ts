import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
Name : string;
user : any;
header : string;
  constructor(private router : Router) { 
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange()) }


  ngOnInit() {
    this.user = localStorage.getItem('user');
    console.log(JSON.parse(this.user));
    const t = JSON.parse(this.user);
    this.Name = t[0].firstName;
    console.log(this.Name);
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
