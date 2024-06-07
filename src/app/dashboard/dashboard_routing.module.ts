import {Routes,RouterModule} from '@angular/router'
import { NgModule } from '@angular/core'
import { CharactersComponent } from './characters/characters.component'

export const routes: Routes =[
    {
        path:"",component:CharactersComponent
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DashboardroutingModule{}