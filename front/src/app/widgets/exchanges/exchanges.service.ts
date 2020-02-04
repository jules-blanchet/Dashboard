import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Exchange} from '../../shared/models/exchange.model';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {
  exchanges: Exchange;

  constructor(private httpClient: HttpClient) {
  }

  async getCurrencyRate(baseCurrency: string): Promise<Exchange> {
    let object = await this.httpClient.get('https://api.exchangeratesapi.io/latest?base=' + baseCurrency).toPromise();
    this.exchanges = await new Exchange().deserialize(object);
    return this.exchanges;
  }
}
