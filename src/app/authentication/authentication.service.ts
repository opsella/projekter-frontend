import { Injectable } from "@angular/core";
import { AuthenticationApi } from "./authentication-api";

@Injectable({
    providedIn: "root"
})
export class AuthenticationService implements AuthenticationApi {

    constructor() { }

    public login(): Promise<string> {
        return Promise.resolve("Username HERE");
    }

    public logout(): Promise<void> {
        return Promise.resolve(undefined);
    }
}
