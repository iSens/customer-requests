import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})

export class CustomerDetailsComponent implements OnInit {

  clientDetails: any;

  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute, 
    private _location: Location) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
       this.dataService.getDetails(params.get('id')).subscribe(c =>{
          console.log(c);
          this.clientDetails = c;
      })   
      });
}

backClicked() {
  this._location.back();
}

}