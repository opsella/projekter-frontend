// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import { OpenIdConfiguration } from "angular-auth-oidc-client";

export const environment = {
  production : false,
  oidc       : {
    authority               : "https://localhost:5443",
    redirectUrl             : window.location.origin,
    postLogoutRedirectUri   : window.location.origin,
    clientId                : "projekter.client",
    scope                   : "openid profile offline_access email", // 'openid profile offline_access ' + your scopes
    responseType            : "code",
    customParamsCodeRequest : {
      client_secret: "ZAQ!2wsxZAQ!2wsx"
    },
    silentRenew                          : true,
    useRefreshToken                      : true,
    renewTimeBeforeTokenExpiresInSeconds : 30,
  } as OpenIdConfiguration,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
