import { enableProdMode, importProvidersFrom } from "@angular/core";

import { environment } from "./environments/environment";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";
import { ActiveTenantInterceptor } from "./app/core/active-tenant.interceptor";
import { FollowLocationHeaderInterceptor } from "./app/shared/follow-location-header.interceptor";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from "@angular/common";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {providePrimeNG} from "primeng/config";
import material from "@primeuix/themes/material";
import {MessageService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
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
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: material
      }
    }),
    provideRouter(routes),
    MessageService,
    DialogService
  ],
}).catch((err) => console.error(err));
