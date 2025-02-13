import { inject, Injectable, signal, Signal, WritableSignal } from "@angular/core";
import { AuthenticationApi } from "./authentication-api";
import { AuthService, User } from "@auth0/auth0-angular";
import { toSignal } from "@angular/core/rxjs-interop";
import { Auth0Permissions } from "../models/auth0/Auth0Permissions";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService implements AuthenticationApi {
  private authService: AuthService = inject(AuthService);

  public user: Signal<User | null | undefined> = toSignal(this.authService.user$);
  public permissions: WritableSignal<Auth0Permissions[]> = signal([]);

  constructor(private http: HttpClient) {
  }

  public async login(): Promise<string | undefined> {
    await firstValueFrom(this.authService.loginWithRedirect());
    await this.getPermissions();
    return this.user()?.email;
  }

  public async logout(): Promise<void> {
    await firstValueFrom(this.authService.logout());
  }

  public async getPermissions(): Promise<Auth0Permissions[]> {
    // const auth0UserId = this.user()?.sub ?? "";
    // const userId = await firstValueFrom(
    //   this.http.get<>(`${environment.projekterApi.host}/users/auth0/:userId`, {
    //     params: {
    //       userId: auth0UserId
    //     }
    //   })
    // );
    // const permissionsResult = await firstValueFrom(
    //   this.http.get<Auth0Permissions[]>(`${environment.projekterApi.host}/users/:userId/permissions`, {
    //     params: {
    //       userId: userId
    //     }
    //   })
    // );
    // this.permissions.set(permissionsResult);
    return this.permissions();
  }
}
