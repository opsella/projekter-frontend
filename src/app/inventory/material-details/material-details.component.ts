import { Component, Input } from "@angular/core";

@Component({
  selector    : "app-material-details",
  templateUrl : "./material-details.component.html",
  styleUrls   : ["./material-details.component.scss"]
})
export class MaterialDetailsComponent {
  @Input() private details: any;
}
