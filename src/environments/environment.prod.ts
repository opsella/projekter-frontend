import { OpenIdConfiguration } from "angular-auth-oidc-client";

export const environment = {
  production : true,
  oidc       : {
    authority                            : "https://authority.opsella.com",
    redirectUrl                          : window.location.origin,
    postLogoutRedirectUri                : window.location.origin,
    clientId                             : "projekter.client",
    scope                                : "openid profile offline_access email tenant-management-api.read tenant-management-api.write", // 'openid profile offline_access ' + your scopes
    responseType                         : "code",
    silentRenew                          : true,
    useRefreshToken                      : true,
    renewTimeBeforeTokenExpiresInSeconds : 30,
  } as OpenIdConfiguration,
};
