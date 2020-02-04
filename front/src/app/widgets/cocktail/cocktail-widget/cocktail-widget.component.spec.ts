import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailWidgetComponent } from './cocktail-widget.component';
import {HttpClientModule} from '@angular/common/http';

describe('CocktailWidgetComponent', () => {
  let component: CocktailWidgetComponent;
  let fixture: ComponentFixture<CocktailWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailWidgetComponent ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
