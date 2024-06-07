import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { IntroductionModule } from '../introduction.module';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
title:any;
newuser:any;
newpassword:any;
confpassword:any;
emailaddress:any;
login:boolean=true;

constructor(private apiService:ApiService){}
ngOnInit(){
  console.log("The page has loaded");
  this.login = true;
  this.title="Welcome to Garden Management System";
}
signup(){
  this.login = false;
}
register(){
  const data={
    "username":this.newuser,
    "userpassword":this.newpassword,
    "useremail":this.emailaddress
  }
  this.apiService.signUp(data).subscribe({
      next:(response)=>{
        console.log("The user is registered successfully");
      },
      error:(error)=>{
        console.error("Error registering user",error);
      }
});
}
}
