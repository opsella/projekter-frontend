import { Component, Input } from "@angular/core";
import { SimpleChipComponent } from "../../shared/simple-chip/simple-chip.component";
import { NgOptimizedImage } from "@angular/common";
import {OverlayBadge} from "primeng/overlaybadge";

@Component({
  selector: "app-project-card",
  imports: [
    SimpleChipComponent,
    NgOptimizedImage,
    OverlayBadge,
  ],
  templateUrl: "./project-card.component.html",
  styleUrl: "./project-card.component.scss",
  standalone: true,
})
export class ProjectCardComponent {
  @Input() public title: string;
  @Input() public status: string = "In Construction";
  @Input() public photo: string;
  @Input() public alerts: number = 0;
  @Input() public location: string = "1110 W 2600 N, Layton, UT, 84041";
}
