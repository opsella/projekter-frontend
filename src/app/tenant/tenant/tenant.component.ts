import { Component, inject } from "@angular/core";
import { TenantsService } from "../services/tenants.service";
import { ContentSectionComponent } from "../../shared/content-section/content-section.component";

@Component({
  selector: "app-tenant",
  templateUrl: "./tenant.component.html",
  styleUrl: "./tenant.component.scss",
  imports: [ContentSectionComponent],
  standalone: true,
})
export class TenantComponent {
  protected tenantService = inject(TenantsService);
}
