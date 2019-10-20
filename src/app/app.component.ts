import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'Customer Requests';

  constructor(private http: Http) {
    http.get('https://kkw-customer-requests.herokuapp.com/customer_requests.json')
      .subscribe(res => this.customer_requests = res.json());
  }
}
