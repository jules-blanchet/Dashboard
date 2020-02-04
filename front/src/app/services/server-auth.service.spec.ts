import { TestBed } from '@angular/core/testing';

import { ServerAuthService } from './server-auth.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('ServerAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FormsModule,
      HttpClientModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ServerAuthService = TestBed.get(ServerAuthService);
    expect(service).toBeTruthy();
  });
});
