import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesWidgetComponent } from './exchanges-widget.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ExchangesWidgetComponent', () => {
  let component: ExchangesWidgetComponent;
  let fixture: ComponentFixture<ExchangesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangesWidgetComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
