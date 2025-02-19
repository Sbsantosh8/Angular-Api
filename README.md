# Angular 19 - Setting Up HTTP Client

This guide provides step-by-step instructions on setting up and using `HttpClient` in an Angular 19 project without `app.module.ts`.

## Steps to Setup `HttpClient`

### Step 1: Generate a Service
Run the following command to generate a new service inside the `services` folder:
```sh
ng g s services/userData
```

### Step 2: Import `HttpClient`
Inside `user-data.service.ts`, import `HttpClient` and inject it into the constructor:
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}
  
  getUserData() {
    return this.http.get('https://api.example.com/users');
  }
}
```

### Step 3: Provide `HttpClient` Globally
In **Angular 19**, instead of `app.module.ts`, we use `app.config.ts`. Open `app.config.ts` and add `provideHttpClient()`:

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

### Step 4: Use the Service in a Component
Import and use `UserDataService` in your component:
```typescript
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  
  constructor(private userDataService: UserDataService) {}
  
  ngOnInit() {
    this.userDataService.getUserData().subscribe(data => {
      this.users = data;
    });
  }
}
```

### Step 5: Run the Project
Start the Angular application using:
```sh
ng serve
```

## Conclusion
This guide walks through the setup of `HttpClient` in an **Angular 19** project using **app.config.ts**. Following these steps, you can make API requests effectively without using `app.module.ts`.

---

✅ Happy Coding! 🚀
