import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
title:any;
rows:{name:string,quantity:number}[]=[];
constructor(){}
ngOnInit(){
  this.addrow();
}
register(){}

addrow(){
this.rows.push({name:"",quantity:0});
}
removerow(data:any){
  console.log("The row will be removed");
  this.rows.splice(data,1);
}
}