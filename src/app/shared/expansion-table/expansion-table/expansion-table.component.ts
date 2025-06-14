import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { ExpansionTableStore } from "../expansion-table.store";
import { Observable, of } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { ExpandableData, ExpansionTableData } from "../expandable-data";
import { TableFiltersComponent } from "../table-filters/table-filters.component";
import {
  CdkCell,
  CdkCellDef,
  CdkColumnDef,
  CdkHeaderCell,
  CdkHeaderCellDef,
  CdkHeaderRow,
  CdkHeaderRowDef,
  CdkRow,
  CdkRowDef,
  CdkTable,
} from "@angular/cdk/table";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { ExpansionTableContentComponent } from "../expansion-table-content/expansion-table-content.component";

@Component({
  selector: "app-expansion-table",
  templateUrl: "./expansion-table.component.html",
  styleUrls: ["./expansion-table.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"),
      ),
    ]),
  ],
  providers: [ExpansionTableStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TableFiltersComponent,
    CdkTable,
    NgFor,
    CdkColumnDef,
    CdkHeaderCellDef,
    CdkHeaderCell,
    CdkCellDef,
    CdkCell,
    MatIconButton,
    NgIf,
    MatIcon,
    ExpansionTableContentComponent,
    CdkHeaderRowDef,
    CdkHeaderRow,
    CdkRowDef,
    CdkRow,
    AsyncPipe,
  ],
  standalone: true,
})
export class ExpansionTableComponent implements OnInit {
  @Input() public tableData: Observable<ExpansionTableData<any>[]>;
  @Input() public tableFilters$: Observable<any> = of([]);

  protected tableDataSource = new MatTableDataSource<ExpandableData<unknown>>(
    [],
  );
  protected columnHeaders: string[] = [];
  protected columnHeadersWithActions: string[] = [];
  protected expandedElements: any[] = [];

  constructor() {}

  public ngOnInit() {
    this.tableData.subscribe((tableData: ExpansionTableData<any>[]) => {
      this.tableDataSource.data = tableData;
      this.columnHeaders = [...Object.keys(tableData[0].data ?? {})].filter(
        (key) => key !== "id",
      );
      this.columnHeadersWithActions = this.columnHeaders.concat([
        "actions",
        "expand",
      ]);
    });
  }

  protected updateExpandedElements(element: any) {
    this.elementIsExpanded(element)
      ? (this.expandedElements = this.expandedElements.filter(
          (elementId) => elementId !== element.id,
        ))
      : this.expandedElements.push(element.id);
  }

  protected elementIsExpanded(element: any) {
    console.log("expandedElement", this.expandedElements);
    return this.expandedElements.includes(element.id);
  }

  protected elementTransitionStage(element: any) {
    return this.elementIsExpanded(element) ? "collapsed" : "expanded";
  }
}
