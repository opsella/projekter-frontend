import { ComponentStore } from "@ngrx/component-store";
import { Injectable } from "@angular/core";
import { ExpandableData } from "./expandable-data";
import { TableFilterActions } from "./table-filters/table-filter-actions";

export interface ExpansionTableState {
  tableData: ExpandableData<unknown>[];
  filterOptions: TableFilterActions[];
  columnHeaders: string[];
  columnHeadersWithActions: string[];
  // filter: string;
}

@Injectable()
export class ExpansionTableStore extends ComponentStore<ExpansionTableState> {
  constructor() {
    super({
      tableData                : [] as ExpandableData<unknown>[],
      filterOptions            : [] as TableFilterActions[],
      columnHeaders            : [],
      columnHeadersWithActions : []
    });
  }

  // Updaters
  public readonly setTableData = this.updater((state, data: ExpandableData<unknown>[]) => {
    const keys: string[] = [ ...Object.keys(data[0]?.data ?? {}) ];

    return {
      ...state,
      tableData                : data,
      columnHeaders            : keys,
      columnHeadersWithActions : [
        ...keys,
        "actions",
        "expand"
      ]
    };
  });

  // public readonly setFilterOptions = this.updater((state, filters: TableFilterActions[]) => ({
  //   ...state,
  //   filterOptions: filters
  // }));

  // public readonly setTableFilter = this.updater((state, filter: string) => ({
  //   ...state,
  //   filter: filter
  // }));

  // Selectors
  public readonly vm$ = this.select(
    this.state$,
    (state) => ({
      tableData                : state.tableData,
      filterOptions            : state.filterOptions,
      columnHeaders            : state.columnHeaders,
      columnHeadersWithActions : state.columnHeadersWithActions
    })
  );
}
