import { ComponentStore } from "@ngrx/component-store";
import { Injectable } from "@angular/core";

export interface ExpansionTableState {
  columnHeaders: [];
}

@Injectable()
export class ExpansionTableStore extends ComponentStore<ExpansionTableState> {
  constructor() {
    super({
      columnHeaders: []
    });
  }

  public readonly getColumnHeaders = this.effect<{}>;

  private readonly columnHeaders$ = this.select(state => state.columnHeaders);

  public readonly vm$ = this.select({
    columnHeaders$: this.selectColumn
  });
}
