import { Component, OnInit } from '@angular/core';
import { GetbookingsService } from '../mybookings/getbookings.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

myfaq;
  constructor(private getfaqservice : GetbookingsService) { }
  ngOnInit() {
    this.getfaqservice.getfaq().subscribe(response => {
      this.myfaq = response;
    
    });
    
  }


}
