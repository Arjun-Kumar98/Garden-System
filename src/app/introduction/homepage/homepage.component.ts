import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { IntroductionModule } from '../introduction.module';
import {Router} from '@angular/router'
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
userName:any;
password:any;
errormessage:any;
newpassword:any;
confpassword:any;
emailaddress:any;


constructor(private apiService:ApiService, private router:Router){}
ngOnInit(){
  this.title="Welcome to the Garden System";
}
signup(){
  this.router.navigate(['/Signup']);
}
  logincheck(){
  if(this.emptycheck(this.userName)&&this.emptycheck(this.password)){
    this.login();
  }else{
    this.errormessage="Please enter your username and password"; 
  }
}

emptycheck(name:any){
if((name!=null)&&(name!="")){
return true;
}else{
return false;
}
}
login(){
  const data={
    "username":this.userName,
    "userpassword":this.password,
  }
  this.apiService.login(data).subscribe({
      next:(response)=>{
         if(response.userId>0){
          window.localStorage.setItem("userId",response.userId);
this.router.navigate(['/Dashboard/'])
         }else{
          this.errormessage = response.message;
         }
      },
      error:(error)=>{
        console.error("Error registering user",error);
      }
});
}
}
