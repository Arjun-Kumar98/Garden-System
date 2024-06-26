import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { CharactersComponent } from './characters/characters.component';
import { DashboardroutingModule } from './dashboard_routing.module';
import { ApiService } from '../core/api.service';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    DashboardroutingModule,
    FormsModule
  ],
  providers:[ApiService,provideHttpClient()]
})
export class DashboardModule { }
