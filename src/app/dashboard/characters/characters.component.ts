import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
title:any;
message:any;
rows:{name:string,quantity:number}[]=[];
constructor(private apiService:ApiService){}
ngOnInit(){
  this.addrow();
  this.message="";
}
register(){
const data={
  "userId":window.localStorage.getItem("userId"),
  "inventory_list":this.rows
}
this.apiService.saveinventorydetails(data).subscribe(res=>{
if(res.status==200){
this.message=res.message;
}else{

}
})
}

addrow(){
this.rows.push({name:"",quantity:0});
}
removerow(data:any){
  this.rows.splice(data,1);
}
}