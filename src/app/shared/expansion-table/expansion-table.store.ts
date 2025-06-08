import { Injectable } from '@angular/core';
import { ExpandableData } from './expandable-data';
import { TableFilterActions } from './table-filters/table-filter-actions';
import { MatTableDataSource } from '@angular/material/table';

export interface ExpansionTableState {
  tableData: MatTableDataSource<ExpandableData<unknown>>;
  filters: TableFilterActions[];
  columnHeaders: string[];
  columnHeadersWithActions: string[];
}

@Injectable()
export class ExpansionTableStore {
  constructor() {
  }
}
