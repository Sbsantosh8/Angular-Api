import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import { UserDataService } from './services/user-data.service';
import { Observable } from 'rxjs';
import { FooterComponent } from "./footer/footer.component";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
  imports: [CommonModule, FooterComponent, FormsModule], 
})
export class AppComponent {
  title = 'Api-Learning';
  username:any;
  users:any;
  constructor(private useDataservices:UserDataService) {
    this.useDataservices.getUserData().subscribe((data)=>{
      console.warn("data" ,data)
      this.users=data;
    })
   }

   getUserFormData(cata:any){
    console.warn(cata)
    this.useDataservices.saveUserData(cata).subscribe((result)=>{
      console.log("result",result)
   })
   
}



}
