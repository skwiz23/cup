import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor(private http: HttpClient) {}

  postData(data: any) {
    const url = 'http://localhost:3000/my-endpoint';
    return this.http.post(url, data);
  }
}