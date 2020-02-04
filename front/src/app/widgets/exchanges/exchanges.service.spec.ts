import { TestBed } from '@angular/core/testing';

import { ExchangesService } from './exchanges.service';
import {HttpClientTestingModule, TestRequest} from '@angular/common/http/testing';
import {Exchange} from '../../shared/models/exchange.model';
import {HttpClientModule} from '@angular/common/http';

describe('ExchangesService', () => {
  let originalTimeout;

  beforeEach(function (){
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
  }
    );

  it('should be created', () => {
    const service: ExchangesService = TestBed.get(ExchangesService);
    expect(service).toBeTruthy();
  });


  it('basic  request 1', async () => {
    const service: ExchangesService = TestBed.get(ExchangesService);
    let currency: Exchange = null;
    await service.getCurrencyRate("EUR").then((res) => {
      currency = res;
    });
    expect(currency.base).toBe('EUR');
  });

  it('basic  request 2', async () => {

    const service: ExchangesService = TestBed.get(ExchangesService);
    let currency: Exchange = null;
    await service.getCurrencyRate("USD").then((res) => {
      currency = res;
    });
    expect(currency.base).toBe('USD');
  });
});
