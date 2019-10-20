import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  date: string;
  customerName: string;
  customerPhone: string;
  brand: string;
  notes: string;
  status: string;
  deposit: string;
  title = 'Customer Requests';

  clients = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      this.clients = data;
      console.log(this.clients);
    })      
  }

  displayedColumns: string[] = ['date', 'customerName', 'customerPhone', 'brand', 'notes', 'status', 'deposit'];

}