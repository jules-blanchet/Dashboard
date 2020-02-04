import { Injectable, OnInit } from '@angular/core';
import { Widget } from '../models/widget.model';
import { Subject, Observable, Observer } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class WidgetService implements OnInit {

  widget: Widget[] = [];
  widgetSubject = new Subject<Widget[]>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  emitWidget() {
    this.widgetSubject.next(this.widget);
  }

  getService(widget) {
    if (widget === "youtube")
      return "youtube";
    else
      return widget
  }

  async postWidget(widget, param1) {
    let noService = false;
    let foundService = this.getService(widget);
    let idService = "";
    let responseService = await this.httpClient.get(
      'http://127.0.0.1:8080/services/name/' + foundService, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
      .toPromise().catch(err => {
        noService = true;
      });
    if (responseService && responseService[0]) {
      idService = responseService[0]["_id"];
    }
    if (noService) {
      responseService = await this.httpClient.post(
        'http://127.0.0.1:8080/services', {name: foundService}, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
        .toPromise().catch(err => {
          noService = true;
        });
      idService = responseService["service"]["_id"];
    }
    console.log("id = ", idService);
    let params = [];
    if (param1 !== "") {
      params = [param1]
    }
    let responseWidget = await this.httpClient.post(
      'http://127.0.0.1:8080/widgets',
      {
        name: widget,
        parameters: params,
        service: idService
      },
      {headers: {
                  "Authorization": "Bearer " + localStorage.getItem("token"),
                  "Content-Type": "application/json"
              }})
      .toPromise().catch(err => {
        console.log("failed to post widget to back")
      });
    return responseWidget;
  }

  async postNewWidget(widget, activate, refreshRate, param1) {
    let wid = await this.postWidget(widget, param1);
    console.log(wid);
    const newWidget = new Widget(wid["widget"]["_id"], widget, activate, refreshRate, param1);
    this.widget.push(newWidget);
    this.emitWidget();
  }

  async createNewWidget(id, widget, activate, refreshRate, param1) {
    const newWidget = new Widget(id, widget, activate, refreshRate, param1);
    this.widget.push(newWidget);
    this.emitWidget();
  }

  moveWidget(fromIndex, toIndex) {
    var element = this.widget[fromIndex];
    this.widget.splice(fromIndex, 1);
    this.widget.splice(toIndex, 0, element);
    this.emitWidget();
  }

  async removeWidget(widget: Widget) {
    let responseService = await this.httpClient.delete(
      'http://127.0.0.1:8080/widget/' + widget["id"], {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
      .toPromise().catch(err => {
        console.log("erreur = ", err);
      });
    const widgetIndexToRemove = this.widget.findIndex(
      (animeEl) => {
        if(animeEl === widget) {
          return true;
        }
      }
    );
    this.widget.splice(widgetIndexToRemove, 1);
    this.emitWidget();
  }
}
