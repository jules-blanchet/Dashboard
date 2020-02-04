import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../translate.service';

@Component({
  selector: 'app-translate-widget',
  templateUrl: './translate-widget.component.html',
  styleUrls: ['./translate-widget.component.css']
})
export class TranslateWidgetComponent implements OnInit {

  showTranslate: boolean;
  fromLanguage: string;
  toLanguage: string;
  textToTranslate: string;
  textTranslated: string;

  constructor(private translateService: TranslateService) {
    this.showTranslate = false;
    this.textTranslated = 'nothing';
    this.fromLanguage = '';
    this.toLanguage = '';
  }

  ngOnInit() {
  }

  onSelectFromChange(event: any) {
    const value = event.target.value;
    if (value === '1') {
      this.fromLanguage = 'en';
    } else if (value === '2') {
      this.fromLanguage = 'fr';
    } else {
      this.fromLanguage = 'es';
    }
  }

  onSelectToChange(event: any) {
    const value = event.target.value;
    if (value === '1') {
      this.toLanguage = 'en';
    } else if (value === '2') {
      this.toLanguage = 'fr';
    } else {
      this.toLanguage = 'es';
    }
  }

  onTextChange(event: any) {
    this.textToTranslate = event.target.value;
  }

  onTranslate() {
    if (this.fromLanguage !== '' && this.toLanguage !== '') {
      const lang = this.fromLanguage + '-' + this.toLanguage;
      this.translateService.getTranslation(this.textToTranslate, lang).then((res) => {
        this.showTranslate = true;
        this.textTranslated = res;
      });
    }
  }

}
