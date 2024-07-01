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
userId:any;
newrows:{itemId:number,itemname:string,itemqty:number}[]=[];
rows:{itemId:number,itemname:string,itemqty:number}[]=[];
updaterows:{itemId:number,itemname:string,itemqty:number}[]=[];
constructor(private apiService:ApiService){}
ngOnInit(){
  this.addrow();
  this.message="";
  this.userId = window.localStorage.getItem("userId");
  this.view_details();
}
view_details(){
  this.apiService.viewinventorydetails(this.userId).subscribe(res=>{
    if(res.status==200){
      if(res.included==1){
        this.rows=res.inventorydetails;
      }else{
        this.message=res.message;
      }
    }
  })
}
register(){
  for(let reg of this.rows){
    if(reg.itemId==0){
      this.newrows.push(reg);
    }else{
      this.updaterows.push(reg);
    }
  }
const data={
  "userId":this.userId,
  "inventory_list":this.newrows,
  "inventory_update_list":this.updaterows
}
this.apiService.saveinventorydetails(data).subscribe(res=>{
if(res.status==200){
this.message=res.message;
}else{
this.message = res.message;
}
})
}

showrows(){
  console.log("the rows are here.."+JSON.stringify(this.rows));
}
addrow(){
this.rows.push({itemId:0,itemname:"",itemqty:0});
}
removerow(data:any){
  this.rows.splice(data,1);
}
}
