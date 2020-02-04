import { Component, OnInit } from '@angular/core';
import {ExchangesService} from '../exchanges.service';
import {Exchange} from '../../../shared/models/exchange.model';

@Component({
  selector: 'app-exchanges-widget',
  templateUrl: './exchanges-widget.component.html',
  styleUrls: ['./exchanges-widget.component.css']
})
export class ExchangesWidgetComponent implements OnInit {

  private firstCurrency: string;
  private secondCurrency: string;
  private baseCurrency: string;
  private exchangesData: Exchange;

  async ngOnInit () {
    await this.fetchExchangesData();
  }

  constructor(private exchangeService : ExchangesService) {
    this.firstCurrency = "USD";
    this.secondCurrency = "CAD";
    this.baseCurrency = "EUR"
  }

  updateFirstCurrency(event: any) {
    this.firstCurrency = event.target.value;
  }

  updateSecondCurrency(event: any) {
    this.secondCurrency = event.target.value;
  }

  async updateBaseCurrency(event: any) {
    this.baseCurrency = event.target.value;
    await this.fetchExchangesData();
  }

  fetchExchangesData = async () => {
    if (!this.exchangesData || this.exchangesData.base !== this.baseCurrency) {
      await this.exchangeService.getCurrencyRate(this.baseCurrency).then((res) => {
        this.exchangesData = res;
      });
    }
  }
}
