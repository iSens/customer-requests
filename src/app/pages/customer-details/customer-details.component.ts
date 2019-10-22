import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  clientDetails: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
       this.dataService.getDetails(params.get('id')).subscribe(c =>{
          console.log(c);
          this.clientDetails = c;
      })   
      });

}
}