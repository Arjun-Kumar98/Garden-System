import { ComponentFixture, TestBed } from '@angular/core/testing';
import {of} from 'rxjs';
import { CharactersComponent } from './characters.component';
import { ApiService } from '../../core/api.service';
import { before } from 'node:test';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let apiServiceMock: any;

  beforeEach(async () => {
    apiServiceMock = {
      viewInventorydetails: jasmine.createSpy('viewinventorydetails').and.returnValue(of({status:200, included:1, inventorydetails:[]})),
      saveinventorydetails: jasmine.createSpy('saveinventorydetails').and.returnValue(of({status:200,message:"Success"}))
    };

    await TestBed.configureTestingModule({
      imports: [CharactersComponent],
      providers:[{provide: ApiService,useValue:apiServiceMock}]
    })
    .compileComponents();
  });
    
  
  beforeEach(()=>{
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
