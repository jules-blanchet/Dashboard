import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateWidgetComponent } from './translate-widget.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TranslateWidgetComponent', () => {
  let component: TranslateWidgetComponent;
  let fixture: ComponentFixture<TranslateWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateWidgetComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
