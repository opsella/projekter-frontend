import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PageWrapperComponent } from "../../shared/page-wrapper/page-wrapper.component";

@Component({
  selector: "app-inventory-view",
  templateUrl: "./inventory-details.component.html",
  styleUrls: ["./inventory-details.component.scss"],
  imports: [PageWrapperComponent],
  standalone: true,
})
export class InventoryDetailsComponent {
  constructor(private router: Router) {
    const id = this.router.getCurrentNavigation()?.extras.state?.["itemId"];
    const type = this.router.getCurrentNavigation()?.extras.state?.["type"];
    console.log("id ", id, " type ", type);
  }
}
