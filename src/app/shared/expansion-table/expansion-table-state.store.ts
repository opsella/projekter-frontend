import { ComponentStore } from "@ngrx/component-store";
import { Injectable } from "@angular/core";
import { TableFilterActions } from "./table-filters/table-filter-actions";
import { ExpandableData } from "./expandable-data";
import { MatTableDataSource } from "@angular/material/table";

export interface ExpansionTableState {
  tableData: ExpandableData<any>[];
  filterOptions: TableFilterActions[];
  columnHeaders: string[];
  columnHeadersWithActions: string[];
  // filter: string;
}

@Injectable()
export class ExpansionTableStore extends ComponentStore<ExpansionTableState> {
  constructor() {
    super({
      tableData                : [] as ExpandableData<any>[],
      filterOptions            : [] as TableFilterActions[],
      columnHeaders            : [],
      columnHeadersWithActions : []
    });
  }

  // Updaters
  public readonly setTableData = this.updater((state, data: ExpandableData<any>[]) => ({
    ...state,
    tableData                : data,
    columnHeaders            : [...Object.keys(data[0].data)] as string[],
    columnHeadersWithActions : [
      ...Object.keys(data[0].data),
      "actions",
      "expand"
    ] as string[]
  }));

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
      tableData                : state.tableData as unknown as MatTableDataSource<ExpandableData<any>>,
      filterOptions            : state.filterOptions,
      columnHeaders            : state.columnHeaders,
      columnHeadersWithActions : state.columnHeadersWithActions
    })
  );
}
