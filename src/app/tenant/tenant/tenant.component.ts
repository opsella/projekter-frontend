import { Component, inject } from "@angular/core";
import { TenantsService } from "../services/tenants.service";

@Component({
  selector    : "app-tenant",
  standalone  : false,
  templateUrl : "./tenant.component.html",
  styleUrl    : "./tenant.component.scss"
})
export class TenantComponent {
  protected tenantService = inject(TenantsService);
}
