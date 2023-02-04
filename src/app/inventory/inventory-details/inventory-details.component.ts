import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { loadInventoryItemDetails } from "../../state/all-inventory/all-inventory.actions";
import { Observable } from "rxjs";
import { selectInventoryItemDetails } from "../../state/all-inventory/all-inventory.selectors";

@Component({
  selector    : "app-inventory-view",
  templateUrl : "./inventory-details.component.html",
  styleUrls   : ["./inventory-details.component.scss"]
})
export class InventoryDetailsComponent {
  protected inventoryItem$: Observable<any> | undefined = this.store.select(selectInventoryItemDetails);

  constructor(
    private router: Router,
    private readonly store: Store
  ) {
    this.store.dispatch(loadInventoryItemDetails({
      itemId: this.router.getCurrentNavigation()?.extras.state?.["itemId"]
    }));
  }
}
