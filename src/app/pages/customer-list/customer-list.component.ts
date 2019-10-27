import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  date: string;
  customerName: string;
  customerPhone: string;
  brand: string;
  notes: string;
  status: string;
  deposit: string;
  action: string;

  title = 'Customer Requests';

  clients: any[] = [];
  
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute) {

    }

  ngOnInit() {

    this.dataService.getClients().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
      this.clients = data;
      console.log(this.clients);

    })      
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  displayedColumns: string[] = ['date', 'customerName', 'customerPhone', 'brand', 'notes', 'status', 'deposit', 'action'];
  
}


