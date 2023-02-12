import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";

@Injectable({
  providedIn: "root"
})
export class TemplateApiService {

  constructor(private apollo: Apollo) {
  }

  // public getAllInventoryTemplates(filters: TemplateFilters): Observable<InventoryTemplate> {
  //   return getAllInventoryTemplates(this.apollo, filters);
  // }
}
