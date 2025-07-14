import {inject, Pipe, PipeTransform } from '@angular/core';
import {ProjectStatusId} from "../models/ids/project-status-id";
import {TenantsService} from "../tenant/services/tenants.service";
import deepEqual from "deep-equal";

@Pipe({
  name: 'projectStatus'
})
export class ProjectStatusPipe implements PipeTransform {
  private tenantService: TenantsService = inject(TenantsService);

  transform(value: ProjectStatusId, ...args: unknown[]): string {
    const statuses = this.tenantService.tenant.value()?.available_project_statuses ?? [];

    if (statuses.length > 0) {
      return statuses.find(s => deepEqual(s.id, value)).name;
    }
    return value?.toString() ?? "Unknown";
  }
}
