import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
    // This is required for auth0 organization invitations
    // Example redirect: https://projekter.app/auth/authorize?invitation=PXaQVdP6XKo7UHLUc61zvJasBiryaXV2&organization=org_yBpvvoPMyTYfLV4M&organization_name=subcodetech
    path: "authorize",
    redirectTo: (route) => {
      const inviteCode: string = route.queryParams["invitation"];
      const org: string = route.queryParams["organization"];
      // const orgName: string = route.queryParams["organization_name"];
      return `https://dev-8nen27hb.us.auth0.com/authorize?invitation=${inviteCode}&organization=${org}`;
    }
  },
];
