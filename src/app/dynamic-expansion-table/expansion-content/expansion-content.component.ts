import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ExpansionContentDirective } from "../expansion-content.directive";
import { ExpandableData, ExpansionTableContentComponent } from "../expandable-data";

@Component({
  selector    : "app-expansion-content",
  templateUrl : "./expansion-content.component.html",
  styleUrls   : ["./expansion-content.component.scss"]
})
export class ExpansionContentComponent implements OnInit {
  @Input() public data!: ExpandableData<unknown>;
  @ViewChild(ExpansionContentDirective, { static: true }) public expansionContent!: ExpansionContentDirective;

  public ngOnInit(): void {
    this.loadComponent();
  }

  private loadComponent(): void {
    const viewContainerRef = this.expansionContent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<ExpansionTableContentComponent>(this.data.expansionComponent);
    componentRef.instance.data = this.data.data;
  }
}
