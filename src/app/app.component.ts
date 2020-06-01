import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Item } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Home';
  items: Item[];

  constructor(private apiService: ApiService) {}

  // load the data
  ngOnInit() {
    this.apiService.getData().subscribe(response => {
      console.log('Data');

      this.items = response;
    }, (error) => {
      alert(error);
    });
  }
}
