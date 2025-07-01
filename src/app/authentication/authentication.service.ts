import { inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { AuthenticationApi } from './authentication-api';
import { AuthService, User } from '@auth0/auth0-angular';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserPermission, UserPermissionsResponse } from '../models/auth0/user-permission';
import { exhaustMap, firstValueFrom, map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { RequestService } from '../core/request.service';
import { UserInfoResponse } from '../registration/registration.service';

@Injectable({
  providedIn: "root"
})
export class AuthenticationService implements AuthenticationApi {
  private authService: AuthService = inject(AuthService);

  public user: WritableSignal<UserInfoResponse | null | undefined> = signal(null);
  public permissions: WritableSignal<UserPermission[]> = signal([]);
  public auth0User: Signal<User | null | undefined> = toSignal(this.authService.user$);

  constructor(private readonly http: RequestService) {
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

  public async logout(): Promise<void> {
    await firstValueFrom(this.authService.logout());
  }

  public getUserInfo(): Observable<UserInfoResponse> {
    return this.http.get<UserInfoResponse>(`${environment.projekterApi}/users/me`)
      .pipe(
        tap((response) => {
          this.user.set(response)
        })
      )
  }

  public getPermissions(): Observable<UserPermission[]> {
    const userId = this.user()?.id!
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
