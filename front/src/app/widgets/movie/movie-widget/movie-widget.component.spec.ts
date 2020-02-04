import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWidgetComponent } from './movie-widget.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MovieWidgetComponent', () => {
  let component: MovieWidgetComponent;
  let fixture: ComponentFixture<MovieWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieWidgetComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
