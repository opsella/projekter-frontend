import { inject, Injectable, Signal } from "@angular/core";
import { AuthenticationApi } from "./authentication-api";
import { AuthService, User } from "@auth0/auth0-angular";
import { toSignal } from "@angular/core/rxjs-interop";
import { jwtDecode, JwtPayload } from "jwt-decode";

export interface AccessToken extends JwtPayload {
  scopes: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService implements AuthenticationApi {
  private authService: AuthService = inject(AuthService);
  public accessToken: Signal<string | undefined> = toSignal(this.authService.getAccessTokenSilently());
  public user: Signal<User | null | undefined> = toSignal(this.authService.user$);

  public getAccessToken(): AccessToken | undefined {
    const token = this.accessToken();
    if (token === undefined) {
      return undefined;
    }

    return jwtDecode<AccessToken>(token);
  }

  public login(): Promise<string> {
    return Promise.resolve("Username HERE");
  }

  public logout(): Promise<void> {
    return Promise.resolve(undefined);
  }
}
