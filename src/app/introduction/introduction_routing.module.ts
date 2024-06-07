import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {
        path:"", component:HomepageComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class IntroductionroutingModule { }