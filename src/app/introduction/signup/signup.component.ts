import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { IntroductionModule } from '../introduction.module';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  title:any;
  newuser:any;
  newpassword:any;
  confpassword:any;
  emailaddress:any;
  successmessage:any;
  
constructor(private apiService:ApiService){}
checker(){
 if(this.newuser!=""&&this.useremail!=""&&(this.userpassword==this.confpassword)){
 this.register();  
}
}
register(){
  const data={
    "username":this.newuser,
    "userpassword":this.newpassword,
    "useremail":this.emailaddress
  }
  this.apiService.signUp(data).subscribe({
      next:(response)=>{
              this.successmessage = response.message;      
      },
      error:(error)=>{
        console.error("Error registering user",error);
      }
});
}
}
