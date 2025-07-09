import { InjectionToken } from "@angular/core";
import { UserPermission } from "../models/auth0/user-permission";
import { Observable } from "rxjs";
import { UserResponse } from "../models/user";

export const AUTH_API_TOKEN = new InjectionToken<string>("AUTHENTICATION_API");

export interface AuthenticationApi {
    login(): Promise<void>;
    logout(): Observable<void>;
    getUserInfo(): Observable<UserResponse>;
    getPermissions(): Observable<UserPermission[]>;
}
