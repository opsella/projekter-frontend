import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

export const claimGuardGuard = (claims: string[]): CanActivateFn => {
  return async (route, state) => {
    const auth = inject(AuthenticationService);
    await auth.getPermissions();
    const permissions = auth.permissions();

    console.log(permissions);

    if (permissions.length == 0) {
      // the user has no permissions they cannot access anything
      return false;
    }

    for (const claim of claims) {
      if (!permissions.some(p => p.permissionName === claim)) {
        // we do not have the required permission
        return false;
      }
    }

    return true;
  };
};

