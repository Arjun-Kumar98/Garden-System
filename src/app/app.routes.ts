import { Routes } from '@angular/router';
import { IntroductionModule } from './introduction/introduction.module';


export const routes: Routes = [
    {
        path:"Garden", loadChildren:()=>IntroductionModule
    }
];
