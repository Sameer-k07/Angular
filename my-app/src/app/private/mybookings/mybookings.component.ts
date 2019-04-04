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
     console.log(response);
    console.log(this.pastbook);
    this.pastd= true;
    this.upcomingd = false;
    });
  }

  upcoming()
  {
    this.upcomingd = true;
    this.pastd= false;
  }


}
