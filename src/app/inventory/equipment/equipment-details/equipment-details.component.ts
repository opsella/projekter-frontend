import { Component, Input } from "@angular/core";

@Component({
  selector: "app-equipment-details",
  templateUrl: "./equipment-details.component.html",
  styleUrls: ["./equipment-details.component.scss"],
  standalone: true,
})
export class EquipmentDetailsComponent {
  @Input() public details: any;
}
