import { enableProdMode, importProvidersFrom } from "@angular/core";

import { environment } from "./environments/environment";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";
import { ActiveTenantInterceptor } from "./app/core/active-tenant.interceptor";
import { FollowLocationHeaderInterceptor } from "./app/shared/follow-location-header.interceptor";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from "@angular/common";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      MatExpansionModule,
      MatInputModule,
      AuthModule.forRoot(environment.auth0),
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ActiveTenantInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FollowLocationHeaderInterceptor,
      multi: true,
    },
    {
      provide: APP_BASE_HREF,
      useValue: "/"
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
