import { ComponentStore } from "@ngrx/component-store";
import { Injectable } from "@angular/core";
import { ExpandableData } from "./expandable-data";
import { TableFilterActions } from "./table-filters/table-filter-actions";
import { MatTableDataSource } from "@angular/material/table";

export interface ExpansionTableState {
  tableData: MatTableDataSource<ExpandableData<unknown>>;
  filters: TableFilterActions[];
  columnHeaders: string[];
  columnHeadersWithActions: string[];
  // filter: string;
}

@Injectable()
export class ExpansionTableStore extends ComponentStore<ExpansionTableState> {
  constructor() {
    super({
      tableData                : new MatTableDataSource<ExpandableData<unknown>>([]),
      filters                  : [] as TableFilterActions[],
      columnHeaders            : [],
      columnHeadersWithActions : []
    });
  }

  // Updaters
  public readonly setTableData = this.updater((state, data: ExpandableData<unknown>[]) => {
    const keys: string[] = [ ...Object.keys(data[0]?.data ?? {}) ];

    const newState = {
      ...state,
      columnHeaders            : keys,
      columnHeadersWithActions : [
        ...keys,
        "actions",
        "expand"
      ]
    };
    newState.tableData.data = data;

    return newState;
  });

  public readonly setFilters = this.updater((state, filters: TableFilterActions[]) => ({
    ...state,
    filters: filters
  }));

  // Selectors
  public readonly vm$ = this.select(
    this.state$,
    (state) => ({
      tableData                : state.tableData,
      filters                  : state.filters,
      columnHeaders            : state.columnHeaders,
      columnHeadersWithActions : state.columnHeadersWithActions
    })
  );
}
