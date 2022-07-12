import { Component, Inject } from '@angular/core'
import { AUTH_API_TOKEN, AuthenticationApi } from './authentication/authentication-api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projekter-frontend';
  public other: Promise<string>;

  constructor(
    @Inject(AUTH_API_TOKEN) authApi: AuthenticationApi
  ) {
    this.other = authApi.login()
  }
}
