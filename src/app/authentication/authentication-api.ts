import { InjectionToken } from "@angular/core";
import { Auth0Permissions } from "../models/auth0/Auth0Permissions";

export const AUTH_API_TOKEN = new InjectionToken<string>("AUTHENTICATION_API");

export interface AuthenticationApi {
    login(): Promise<string | undefined>;
    logout(): Promise<void>;
    getPermissions(): Promise<Auth0Permissions[]>;
}
