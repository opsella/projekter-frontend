import { Component, ContentChild, Input, TemplateRef } from "@angular/core";
import { ArrayDataSource, CollectionViewer, DataSource, ListRange } from "@angular/cdk/collections";
import { Observable } from "rxjs";

@Component({
  selector    : "app-data-list",
  templateUrl : "./data-list.component.html",
  styleUrls   : ["./data-list.component.scss"]
})
export class DataListComponent<TData>  {
  @Input() public data: DataSource<TData> = new ArrayDataSource<TData>([]);

  @ContentChild("ContentHeader") public ContentHeader: TemplateRef<unknown> | null = null;
  @ContentChild("ContentBody") public ContentBody: TemplateRef<unknown> | null = null;
  @ContentChild("ContentFooter") public ContentFooter: TemplateRef<unknown> | null = null;

  protected collectionViewer: CollectionViewer = {
    viewChange: new Observable<ListRange>()
  };
}
