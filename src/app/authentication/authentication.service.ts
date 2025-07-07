import { inject, Injectable, signal, Signal, WritableSignal } from "@angular/core";
import { AuthenticationApi } from "./authentication-api";
import { AuthService, IdToken, User } from "@auth0/auth0-angular";
import { toSignal } from "@angular/core/rxjs-interop";
import { UserPermission, UserPermissionsResponse } from "../models/auth0/user-permission";
import {
  BehaviorSubject,
  exhaustMap,
  firstValueFrom,
  map,
  Observable,
  take,
  tap
} from "rxjs";
import { environment } from "../../environments/environment";
import { RequestService } from "../core/request.service";
import { UserInfoResponse } from "../registration/registration.service";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService implements AuthenticationApi {
  private authService: AuthService = inject(AuthService);
  private tokenIsExpired: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private onTokenExpired$: Observable<boolean> = this.tokenIsExpired.asObservable();

  public user: WritableSignal<UserInfoResponse | null | undefined> = signal(null);
  public permissions: WritableSignal<UserPermission[]> = signal([]);
  public auth0User: Signal<User | null | undefined> = toSignal(this.authService.user$);
  public token: Signal<IdToken | null> = toSignal(this.authService.idTokenClaims$);

  constructor(private readonly http: RequestService) {
    this.onTokenExpired$
      .subscribe((isExpired) => {
        if (isExpired) {
          console.log("Expired at: " + (this.token()?.exp ?? new Date()));
          this.logout()
            .pipe(
              take(1),
            )
            .subscribe(() => {});
        } else {
          console.log("Not yet expired");
        }
      })
  }

  private validateToken(): boolean {
    const token = this.token();
    let isExpired = false;

    if (!token) {
      isExpired = true;
    }

    const currentTime = new Date();
    const expirationTime = new Date(token.exp);
    if (currentTime > expirationTime) {
      isExpired = true;
    }

    this.tokenIsExpired.next(isExpired);
    return isExpired;
  }

  public async login(): Promise<void> {
    await firstValueFrom(this.authService.loginWithRedirect());
    this.authService.user$
      .pipe(
        exhaustMap(() => {
          return this.http.get<UserInfoResponse>(`${environment.projekterApi}/users/me`)
            .pipe(
              tap((response) => {
                this.user.set(response);
              }),
              exhaustMap((response) => {
                return this.http.get<UserPermissionsResponse>(`${environment.projekterApi}/users/:userId/permissions`, {
                  userId: response.id
                })
                  .pipe(
                    tap((response) => {
                      this.permissions.set(response.permissions);
                    })
                  )
              })
            )
        })
      )
  }

  public logout(): Observable<void> {
    return this.authService.logout();
  }

  public getUserInfo(): Observable<UserInfoResponse> {
    this.validateToken();

    return this.http.get<UserInfoResponse>(`${environment.projekterApi}/users/me`)
      .pipe(
        tap((response) => {
          this.user.set(response)
        })
      )
  }

  public getPermissions(): Observable<UserPermission[]> {
    this.validateToken();

    const userId = this.user()?.id;
    return this.http.get<UserPermissionsResponse>(`${environment.projekterApi}/users/:userId/permissions`, {
      userId: userId
    })
      .pipe(
        tap((response) => {
          this.permissions.set(response.permissions);
        }),
        map((response) => {
          return response.permissions ?? []
        })
      )
  }
}
