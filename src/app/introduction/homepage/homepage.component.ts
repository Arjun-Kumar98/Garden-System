import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
title:any;
ngOnInit(){
  console.log("The page has loaded");
  this.title="Welcome to Garden Management System";
}
}
