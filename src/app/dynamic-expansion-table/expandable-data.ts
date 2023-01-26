import { Type } from "@angular/core";

export interface ExpandableData<TDataType> extends ExpandableComponent {
  data?: TDataType;
}

export interface ExpandableComponent {
  expansionComponent: Type<ExpansionTableContentComponent>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExpansionTableContentComponent {
  data?: unknown;
}
