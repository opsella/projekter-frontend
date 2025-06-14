import { Component, Input } from "@angular/core";

@Component({
  selector: "app-material-details",
  templateUrl: "./material-details.component.html",
  styleUrls: ["./material-details.component.scss"],
  standalone: true,
})
export class MaterialDetailsComponent {
  @Input() public details: any;
}
