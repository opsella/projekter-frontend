import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthenticationModule } from "./authentication/authentication.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { CoreModule } from "./core/core.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";
import { environment } from "../environments/environment";
import { GraphQLModule } from "./graphql.module";
import { ActiveTenantInterceptor } from "./core/active-tenant.interceptor";
import { MatInputModule } from "@angular/material/input";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { EquipmentEffects } from "./state/equipment/equipment.effects";
import { equipmentInventoryReducer } from "./state/equipment/equipment.reducer";
import { inventoryItemsReducer } from "./state/all-inventory/all-inventory.reducer";

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
    GraphQLModule,
    HttpClientModule,
    AuthModule.forRoot(environment.auth0),
    StoreModule.forRoot({
      equipment : equipmentInventoryReducer,
      inventory : inventoryItemsReducer
    }, {}),
    EffectsModule.forRoot([EquipmentEffects]),
  ],
  providers: [
    {
      provide  : HTTP_INTERCEPTORS,
      useClass : AuthHttpInterceptor,
      multi    : true
    },
    {
      provide  : HTTP_INTERCEPTORS,
      useClass : ActiveTenantInterceptor,
      multi    : true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
