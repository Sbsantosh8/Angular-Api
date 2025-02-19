// import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
// export class UserDataService {
// url = 'https://jsonplaceholder.typicode.com/users';
//   constructor(private http:HttpClient) { }

//   user(){
//     return this.http.get(this.url);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Ensures global availability
})
export class UserDataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Replace with your API

  constructor(private http: HttpClient) {} // Ensure HttpClient is injected

  getUserData() {
    return this.http.get(`${this.apiUrl}`);
  }
}
