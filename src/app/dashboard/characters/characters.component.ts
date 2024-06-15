import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
gard1:any;
gard2:any;
gard3:any;
gard4:any;
title:any;
rows:{gard:string}[]=[];
constructor(){}
ngOnInit(){
  this.addrow();
}
register(){}

addrow(){
this.rows.push({gard:""});
}
}