import { Component, Input, OnInit } from "@angular/core";
import { InventoryDataService } from "../inventory-data.service";

@Component({
  selector    : "app-expansion-detail",
  templateUrl : "./expansion-detail.component.html",
  styleUrls   : ["./expansion-detail.component.scss"]
})
export class ExpansionDetailComponent implements OnInit {
  @Input() public id?: string;
  @Input() public data: string | undefined;

  constructor(
    private inventoryDataService: InventoryDataService
  ) {
  }
  public async ngOnInit() {
    await this.inventoryDataService.getExpansionDetails(this.id, this.data);
  }
}
