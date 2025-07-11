import { Component, computed, input, InputSignal, Signal } from "@angular/core";
import {TableModule} from "primeng/table";

@Component({
  selector: "app-simple-table",
  imports: [
    TableModule
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
