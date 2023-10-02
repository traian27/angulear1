import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../shared/auth/auth.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private router: Router,
                private auth: AuthService) {

  }



  logout(){
    this.auth.logout()
    this.router.navigate((['']))

  }

}
