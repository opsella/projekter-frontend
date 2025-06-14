import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-inventory-add",
  templateUrl: "./inventory-add.component.html",
  styleUrls: ["./inventory-add.component.scss"],
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  standalone: true,
})
export class InventoryAddComponent {}
