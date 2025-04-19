import { InjectionToken } from '@angular/core';
import { UserInfoResponse } from '../registration/registration.service';
import { UserPermission } from '../models/auth0/user-permission';
import { Observable } from 'rxjs';

export const AUTH_API_TOKEN = new InjectionToken<string>("AUTHENTICATION_API");

export interface AuthenticationApi {
    login(): Promise<void>;
    logout(): Promise<void>;
    getUserInfo(): Observable<UserInfoResponse>;
    getPermissions(): Observable<UserPermission[]>;
}
