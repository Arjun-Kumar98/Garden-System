import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path:"", component:HomepageComponent
    },
    {
        path:"Signup",component:SignupComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class IntroductionroutingModule { }