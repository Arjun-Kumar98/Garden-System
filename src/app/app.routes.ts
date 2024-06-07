import { Routes } from '@angular/router';
import { IntroductionModule } from './introduction/introduction.module';
import { DashboardModule } from './dashboard/dashboard.module';


export const routes: Routes = [
    {
        path:"", loadChildren:()=>IntroductionModule
    },
    {
        path:"Dashboard",loadChildren:()=>DashboardModule
    }
];
