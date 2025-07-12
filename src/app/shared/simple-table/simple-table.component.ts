import {
  Component,
  computed,
  input,
  InputSignal,
  model,
  ModelSignal,
  output,
  OutputEmitterRef,
  Signal
} from "@angular/core";
import {TableModule} from "primeng/table";

export interface TableColumnMapping {
  key: string;
  name: string;
  value?: (item: unknown) => string
}

@Component({
  selector: "app-simple-table",
  imports: [
    TableModule
  ],
  templateUrl: "./simple-table.component.html",
  styleUrl: "./simple-table.component.scss"
})
export class SimpleTableComponent {
  public columns: InputSignal<TableColumnMapping[]> = input([]);
  public data: InputSignal<unknown[]> = input([]);
  public selectedItems: ModelSignal<unknown[] | null> = model(null);

  protected columnValue(mapper: TableColumnMapping, value: unknown): string {
    if (typeof mapper.value === 'function') {
      return mapper.value(value);
    }
    return value?.toString();
  }
}
