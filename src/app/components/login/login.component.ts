import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {AuthService} from "src/app/shared/auth/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  password: string = '';
  email: string = '';
  passwordFail: string = '';
  emailFail: string = '';

  constructor(private router: Router,
              private auth: AuthService,
              private route: ActivatedRoute) {
      if (this.auth.getToken()){
        this.router.navigate((['/index']))
      }
  }

  login() {
    if (this.password.length < 6) {
      this.passwordFail = 'password contains less than 6 characters';
    } else {
      this.passwordFail = '';
    }

    let res = String(this.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!res) {
      this.emailFail = 'email fail';
    } else {
      this.emailFail = '';
    }

    if (!this.emailFail.length && !this.passwordFail.length) {
      let user = {
        password: this.password,
        email: this.email,
      }
      if (this.auth.login(user)){
        this.router.navigate((['/index']))
      }

    }

  }


}

