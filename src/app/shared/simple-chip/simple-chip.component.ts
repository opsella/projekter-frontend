import { Component } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";

@Component({
  selector: "app-simple-chip",
  imports: [MatChipsModule],
  templateUrl: "./simple-chip.component.html",
  styleUrl: "./simple-chip.component.scss",
  standalone: true,
})
export class SimpleChipComponent {}
