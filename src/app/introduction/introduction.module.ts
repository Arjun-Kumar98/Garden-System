import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IntroductionroutingModule } from './introduction_routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { ApiService } from '../core/api.service';
import { provideHttpClient } from '@angular/common/http';





@NgModule({
  declarations: [HomepageComponent,SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    IntroductionroutingModule,

  ],
providers:[ApiService,provideHttpClient()],
})
export class IntroductionModule { }
