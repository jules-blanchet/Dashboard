import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ServerAuthService, Identifiers } from '../services/server-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {

  identifiers: Identifiers;
  passwordCheck: string;
  response: boolean;

  constructor(private serverAuth: ServerAuthService, private router: Router) {
    this.identifiers = {firstName: '', lastName: '', email: '', password: ''};
  }

  ngOnInit() {
    this.response = true;
  }

  async onRegister() {
    this.response = await this.serverAuth.sendUserRequest(this.identifiers);
    if (this.response) {
      console.log('Submitted !');
      await this.router.navigateByUrl('');
    } else {
      console.log('Impossible to submit !');
    }
  }
}
