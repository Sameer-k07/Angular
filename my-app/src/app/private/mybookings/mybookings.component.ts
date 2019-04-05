import { Component, OnInit } from '@angular/core';
import { GetbookingsService } from './getbookings.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  mybooking:any;
  pastbook: any;
  upcomingd:boolean;
  pastd : boolean;
  constructor(private getbookingservice :GetbookingsService) { }
  ngOnInit() {
    this.upcomingd = true;
    
      this.getbookingservice.getbookings().subscribe(response => {
        this.mybooking = response;
       
     
      });
    }
  
  bookbooking(){
    this.getbookingservice.getpastbookings().subscribe(response => {
      this.pastbook = response;

    this.pastd= true;           //pastbooking will be seen
    this.upcomingd = false;     //upcoming bookings will be hidden
    });
  }
  upcoming()
  {
    this.upcomingd = true;         //upcoming booking will be seen
    this.pastd= false;            //pastbooking will be hidden
  }


}
