import { InjectionToken } from "@angular/core";

export const AUTH_API_TOKEN = new InjectionToken<string>("");

export interface AuthenticationApi {
    login(): void;
    logout(): void;
}
