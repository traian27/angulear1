import {Injectable} from '@angular/core';
import {User} from "./interfaces";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private token = '';

  constructor() {
    this.token = localStorage.getItem('token') ?? '';
  }

  public isAuthenticated(): boolean {
    return !!this.token
  }

  public getToken(): string {
    return this.token
  }
  public logout() {
    this.token = '';
    localStorage.removeItem('token')
  }

  login(user: User): boolean {
    if (user.email == 'admin@admin.com' && user.password == '123456') {
      localStorage.setItem('token', 'token-test')
      this.token = 'token-test';
      return true;
    }
    return false;
  }
}
