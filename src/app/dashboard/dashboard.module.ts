import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { DashboardroutingModule } from './dashboard_routing.module';



@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    DashboardroutingModule
  ]
})
export class DashboardModule { }
