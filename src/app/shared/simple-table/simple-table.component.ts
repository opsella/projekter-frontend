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
import {Tooltip} from "primeng/tooltip";
import {Button} from "primeng/button";

export interface TableConfig {
  columns: TableColumnMapping[];
  actions: TableAction[];
  alertConfig?: AlertConfig
}

export interface AlertConfig {
  fn: (item: unknown) => Alert | null;
}

export interface Alert {
  icon: string;
  tooltip: string;
  severity: "primary" | "secondary" | "success" | "info" | "warn" | "danger" | "help";
  color: string;
}

export interface TableAction {
  icon: string;
  tooltip: string;
  severity?: "primary" | "secondary" | "success" | "info" | "warn" | "danger" | "help";
  fn: (item: unknown) => void
}

export interface TableColumnMapping {
  key: string;
  name: string;
  transform?: (item: unknown) => string
}

@Component({
  selector: "app-simple-table",
  imports: [
    TableModule,
    Tooltip,
    Button
  ],
  templateUrl: "./simple-table.component.html",
  styleUrl: "./simple-table.component.scss"
})
export class SimpleTableComponent {
  protected shouldAlert: ModelSignal<boolean> = model(false);

  public config: InputSignal<TableConfig> = input({ columns: [], actions: [] });
  public data: InputSignal<unknown[]> = input([]);
  public selectedItems: ModelSignal<unknown[] | null> = model(null);

  protected columnValue(mapper: TableColumnMapping, value: unknown): string {
    if (typeof mapper.transform === 'function') {
      return mapper.transform(value);
    }
    return value[mapper.key].toString();
  }
}
