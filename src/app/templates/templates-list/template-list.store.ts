// import { ComponentStore } from "@ngrx/component-store";
// import { Injectable, Type } from "@angular/core";
// import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";
// import { ExpansionContentData, ExpansionTableData } from "../../shared/expansion-table/expandable-data";
// import { UnreachableException } from "../../shared/exceptions/unreachable-exception";
// import { TableFilterActions } from "../../shared/expansion-table/table-filters/table-filter-actions";
// import { TemplateListData } from "./templates-list.component";
// import { TemplateDataService } from "../template-data.service";
//
// export interface TemplatesListState {
//   templates: ProjectTemplate[] | InventoryTemplate[];
//   tableFilters: TableFilterActions[];
//   status: "pending" | "loading" | "succeeded" | "failed";
// }
//
// export type SupportedTemplates = ProjectTemplate[] | InventoryTemplate[];
// export type TemplateTypes = "projects" | "inventory";
//
//
// @Injectable()
// export class TemplatesListStore extends ComponentStore<TemplatesListState> {
//   constructor(
//     private templateDataService: TemplateDataService,
//   ) {
//     super({
//       templates    : [] as SupportedTemplates,
//       tableFilters : [
//         {
//           title  : "Projects",
//           action : () => this.getTemplateTableData({ filters: {}, type: "projects" })
//         },
//         {
//           title  : "Inventory",
//           action : () => this.getTemplateTableData({ filters: {}, type: "inventory" })
//         },
//       ],
//       status: "pending"
//     });
//   }
//
//   private readonly templates$ = this.select(state => state.templates);
//
//   public readonly getTemplateTableData = this.effect<{
//     filters: TemplateFilters;
//     type: TemplateTypes;
//   }>((
//     filters$: Observable<{filters: TemplateFilters; type: TemplateTypes }>
//   ) => {
//     return filters$.pipe(
//       switchMap(
//         (filters) => this.templateDataService.templateTableQuery(filters.filters, filters.type).pipe(
//           tap({
//             next: (data) => {
//               this.setTemplateTableData(data);
//               this.setStatusSucceeded();
//             },
//             error: () => EMPTY
//           }),
//           catchError(() => EMPTY)
//         )
//       )
//     );
//   });
//
//   private readonly setTemplateTableData = this.updater((state, value: SupportedTemplates) => ({
//     ...state,
//     inventory: [ ...value ]
//   }));
//
//   private readonly setStatusSucceeded = this.updater((state) => ({
//     ...state,
//     status: "succeeded"
//   }));
//
//   private readonly tableFilters$ = this.select(
//     ({ tableFilters }) => tableFilters
//   );
//   private readonly hasData$ = this.select(
//     ({ status }) => status === "succeeded"
//   );
//
//   private selectTableData(): Observable<ExpansionTableData<TemplateListData>[]> {
//     return this.select(
//       this.templates$,
//       (templates): ExpansionTableData<TemplateListData>[] => {
//         return templates.map(data => {
//           return {
//             data: {
//               id          : data.id,
//               code        : data.code,
//               name        : data.name,
//               description : data?.description
//             },
//             expansionComponent: this._expansionComponent(data),
//           } as ExpansionTableData<InventoryListData>;
//         });
//       }
//     );
//   }
//
//   public readonly vm$ = this.select({
//     inventory$    : this.selectTableData(),
//     hasData$      : this.hasData$,
//     tableFilters$ : this.tableFilters$
//   });
//
//   private _expansionComponent(data: ProjectTemplate | InventoryTemplate): Type<ExpansionContentData> {
//     if (data instanceof InventoryTemplate) {
//       return InventoryTemplateContentComponent;
//     } else if (data instanceof ProjectTemplate) {
//       return ProjectTemplateContentComponent;
//     } else {
//       throw new UnreachableException();
//     }
//   }
// }
