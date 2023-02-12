import { Component } from "@angular/core";

export interface TemplateListData {
  id: string;
  name: string;
  code: string;
  description?: string;
  quantity?: number;
  unit?: number;
}
@Component({
  selector    : "app-templates-list",
  templateUrl : "./templates-list.component.html",
  styleUrls   : ["./templates-list.component.scss"],
  // providers   : [TemplatesListStore]
})
export class TemplatesListComponent {
  // public readonly vm$ = this.templateListStore.vm$;
  //
  // constructor(
  //   private readonly templateListStore: TemplatesListStore
  // ) {
  // }
  //
  // public ngOnInit() {
  //   this.templateListStore.getTemplateTableData({ filters: {}, type: "projects" });
  // }
}
