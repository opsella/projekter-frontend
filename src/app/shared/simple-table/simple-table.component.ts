import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal
} from "@angular/core";
import {TableModule} from "primeng/table";
import {Tooltip} from "primeng/tooltip";
import {Button} from "primeng/button";

export interface TableConfig<TModel> {
  columns: TableColumnMapping<TModel>[];
  actions: TableAction<TModel>[];
  alertConfig?: AlertConfig<TModel>
}

export interface AlertConfig<TModel> {
  fn: (item: TModel) => Alert | null;
}

export interface Alert {
  icon: string;
  tooltip: string;
  severity: "primary" | "secondary" | "success" | "info" | "warn" | "danger" | "help";
  color: string;
}

export interface TableAction<TModel> {
  icon: string;
  tooltip: string;
  severity?: "primary" | "secondary" | "success" | "info" | "warn" | "danger" | "help";
  fn: (item: TModel) => void
}

export interface TableColumnMapping<TModel> {
  key: keyof TModel;
  name: string;
  transform?: (item: TModel) => string
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
export class SimpleTableComponent<TModel> {
  protected shouldAlert: ModelSignal<boolean> = model(false);

  public config: InputSignal<TableConfig<TModel>> = input({
    columns: [],
    actions: []
  });
  public data: InputSignal<TModel[]> = input([]);
  public selectedItems: ModelSignal<TModel[] | null> = model(null);

  protected columnValue(mapper: TableColumnMapping<TModel>, value: TModel): string {
    if (typeof mapper.transform === 'function') {
      return mapper.transform(value);
    }

    if (value[mapper.key])
      return value[mapper.key].toString();

    return "";
  }
}
