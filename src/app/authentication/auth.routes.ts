import { Routes } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { take } from "rxjs";

export const authRoutes: Routes = [
  {
    // This is required for auth0 organization invitations
    // Example redirect: https://projekter.app/auth/authorize?invitation=PXaQVdP6XKo7UHLUc61zvJasBiryaXV2&organization=org_yBpvvoPMyTYfLV4M&organization_name=subcodetech
    path: "authorize",
    redirectTo: (route) => {
      const auth0 = inject(AuthService);
      const inviteCode: string = route.queryParams["invitation"];
      const org: string = route.queryParams["organization"];
      auth0.loginWithRedirect({
        appState: {
          target: "/user/register"
        },
        authorizationParams: {
          redirect_uri: window.location.origin,
          organization: org,
          invitation: inviteCode,
        }
      })
        .pipe(
          take(1)
        )
        .subscribe();
      return "";
    }
  },
];
