import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(
    private meta: Meta,
    private httpClient: HttpClient
    ) {
      this.httpClient
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.error(error);
      });
    }
}
