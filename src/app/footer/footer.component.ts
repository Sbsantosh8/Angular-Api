import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
yousers:any;

constructor(private useDataservices:UserDataService) {
  this.useDataservices.getUserData().subscribe((data)=>{
    console.warn("data" ,data)
    this.yousers=data;
  })


}



}
