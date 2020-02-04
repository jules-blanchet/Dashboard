import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoWidgetComponent } from './meteo-widget.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MeteoService} from '../meteo.service';

describe('MeteoWidgetComponent', () => {
  let component: MeteoWidgetComponent;
  let fixture: ComponentFixture<MeteoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoWidgetComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
