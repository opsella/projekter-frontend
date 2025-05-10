import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ExpansionContentDirective } from './expansion-content.directive';
import { ExpandableData, ExpansionContentData } from '../expandable-data';

@Component({
    selector: "app-expansion-table-content",
    templateUrl: "./expansion-table-content.component.html",
    styleUrls: ["./expansion-table-content.component.scss"],
    standalone: false
})
export class ExpansionTableContentComponent implements OnInit {
  @Input() public data!: ExpandableData<unknown>;
  @ViewChild(ExpansionContentDirective, { static: true }) public expansionContent!: ExpansionContentDirective;

  public ngOnInit(): void {
    const viewContainerRef = this.expansionContent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<ExpansionContentData>(this.data.expansionComponent);
    componentRef.instance.data = this.data.data;
  }
}
