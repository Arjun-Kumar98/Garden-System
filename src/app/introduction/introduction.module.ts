import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionroutingModule } from './introduction_routing.module';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    IntroductionroutingModule
    
  ]
})
export class IntroductionModule { }
