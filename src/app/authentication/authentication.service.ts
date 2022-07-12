import { Injectable } from '@angular/core'
import { AuthenticationApi } from './authentication-api'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements AuthenticationApi {

  constructor() { }

  login(): Promise<string> {
    return Promise.resolve("Username HERE");
  }

  logout(): Promise<void> {
    return Promise.resolve(undefined);
  }
}
