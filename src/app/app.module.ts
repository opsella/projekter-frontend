import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthenticationModule } from "./authentication/authentication.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { CoreModule } from "./core/core.module";
// import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from "@auth0/auth0-angular";
import { environment } from "../environments/environment";

@NgModule({
  declarations : [AppComponent],
  imports      : [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    // GraphQLModule,
    HttpClientModule,
    AuthModule.forRoot(environment.auth0),
  ],
  providers : [],
  bootstrap : [AppComponent],
})
export class AppModule {
}
