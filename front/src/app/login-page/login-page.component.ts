import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServerAuthService, Credentials } from '../services/server-auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  credentials: Credentials;
  response: boolean;

  constructor(private serverAuth: ServerAuthService, private router: Router) {
    this.credentials = {email: '', password: ''};
  }

  ngOnInit() {
    this.response = true;
  }

  async onLogin() {
    this.response = await this.serverAuth.sendLoginRequest(this.credentials);
    if (this.response) {
      console.log('Submitted !');
      await this.router.navigateByUrl('/homePage');
    } else {
      console.log('Impossible to submit !');
    }
  }
}


