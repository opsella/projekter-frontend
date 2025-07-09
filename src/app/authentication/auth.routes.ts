import { Routes } from "@angular/router";
import { environment } from "../../environments/environment";

export const authRoutes: Routes = [
  {
    // This is required for auth0 organization invitations
    // Example redirect: https://projekter.app/auth/authorize?invitation=PXaQVdP6XKo7UHLUc61zvJasBiryaXV2&organization=org_yBpvvoPMyTYfLV4M&organization_name=subcodetech
    path: "authorize",
    redirectTo: (route) => {
      const inviteCode: string = route.queryParams["invitation"];
      const org: string = route.queryParams["organization"];
      const aud: string = encodeURIComponent(environment.auth0.authorizationParams.audience);
      const clientId: string = environment.auth0.clientId;
      return `https://${environment.auth0.domain}/authorize?audience=${aud}&response_type=code&client_id=${clientId}&invitation=${inviteCode}&organization=${org}`;
    }
  },
];
