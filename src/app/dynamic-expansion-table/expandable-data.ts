import { Type } from "@angular/core";

export interface ExpandableData<TDataType> extends ExpandableComponent {
  data?: TDataType;
}

export interface Action {
  title: string;
  enabled: () => boolean;
  visible: () => boolean;
  action: () => void;
}

export interface ActionData {
  actions: Action[];
}

export interface ExpansionTableData<TDataType> extends ExpandableData<TDataType>, ActionData { }

export interface ExpandableComponent {
  expansionComponent: Type<ExpansionTableContentComponent>;
}

export interface ExpansionTableContentComponent {
  data?: unknown;
}
