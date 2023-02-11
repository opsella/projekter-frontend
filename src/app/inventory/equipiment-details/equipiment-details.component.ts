import { Component, Input } from "@angular/core";

@Component({
  selector    : "app-equipiment-details",
  templateUrl : "./equipiment-details.component.html",
  styleUrls   : ["./equipiment-details.component.scss"]
})
export class EquipimentDetailsComponent {
  @Input() private details: any;

}
