import { Component, computed, input, InputSignal, Signal } from "@angular/core";
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";

@Component({
  selector: "app-simple-table",
  imports: [
    MatTable,
    MatHeaderRow,
    MatRow,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatColumnDef
  ],
  templateUrl: "./simple-table.component.html",
  styleUrl: "./simple-table.component.scss"
})
export class SimpleTableComponent {
  public columns: InputSignal<{ key: string, name: string }[]> = input([]);
  public data: InputSignal<unknown[]> = input([]);

  protected keymap: Signal<string[]> = computed(() => {
    return this.columns().map(column => column.key);
  })
}
