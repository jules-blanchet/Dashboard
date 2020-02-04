import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaWidgetComponent } from './nasa-widget.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NasaWidgetComponent', () => {
  let component: NasaWidgetComponent;
  let fixture: ComponentFixture<NasaWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaWidgetComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
