import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../models/widget.model';
import { Subscription } from 'rxjs';
import { WidgetService } from '../services/widget.service';
import { Router } from '@angular/router';
import {ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  @Input() video: String;

  widgetForm: FormGroup;
  widget: Widget[] = [];
  widgetSubscription: Subscription;
  needParameter: boolean;
  parameterName: string;
  error: boolean;

  constructor(private formBuilder: FormBuilder,
              private widgetService: WidgetService,
              private router: Router,
              private httpClient: HttpClient) { }


  async ngOnInit() {
    this.widgetSubscription = this.widgetService.widgetSubject.subscribe(
      (widget: Widget[]) => {
        this.widget = widget;
      }
    );
    this.widgetService.emitWidget();
    this.initForm();
    await this.getWidgets();
    console.log(this.widget);
    this.needParameter = true;
    this.parameterName = "Id de la vidéo youtube";
  }

  changeSelectedWidget(event) {
      this.error = false;
      if (event.target.value == "meteo") {
        this.needParameter = true;
        this.parameterName = "Ville"
      } else if (event.target.value == "youtube") {
        this.needParameter = true;
        this.parameterName = "Id de la vidéo youtube"
      } else {
        this.needParameter = false;
      }
  }

  initForm() {
    this.widgetForm = this.formBuilder.group({
      widget: ['youtube', Validators.required],
      param1: ['']
    });
  }


   onDeleteWidget(widget: Widget) {
    this.widgetService.removeWidget(widget);
  }

  onMoveWidget(index: number, toIndex: number) {
    this.widgetService.moveWidget(index, toIndex);
  }

  showHide() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  async addWidget() {
    const widget = this.widgetForm.get('widget').value;
    const activate = true;
    const refreshRate = 0;
    const param1 = this.widgetForm.get('param1').value;
    if (param1 == "" && this.needParameter) {
      this.error = true;
    } else {
      this.error = false;
      await this.widgetService.postNewWidget(widget, activate, refreshRate, param1)
    }
  }

  async getWidgets() {
    await this.httpClient.get('http://127.0.0.1:8080/widgets/me', {
      headers: {"Authorization": "Bearer " + localStorage.getItem("token")}
    }).toPromise().then((res: Array<Object>) => {
      let widgets = res["widgets"];
      widgets.forEach(widget => {
        console.log(widget);
        let param1 = "";
        if (widget["parameters"][0]) {
          param1 = widget["parameters"][0]
        }
        this.widgetService.createNewWidget(widget["_id"], widget["name"], true,0, param1);
      })
    }).catch(async (err) => {
      if (err["error"]["error"] == "Not authorized to access this resource") {
          await this.router.navigateByUrl('/');
        }
      });
  }
}
