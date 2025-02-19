import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import { UserDataService } from './services/user-data.service';
import { Observable } from 'rxjs';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
  imports: [CommonModule, FooterComponent], 
})
export class AppComponent {
  title = 'Api-Learning';
  users:any;
  constructor(private useDataservices:UserDataService) {
    this.useDataservices.getUserData().subscribe((data)=>{
      console.warn("data" ,data)
      this.users=data;
    })
   }
}




