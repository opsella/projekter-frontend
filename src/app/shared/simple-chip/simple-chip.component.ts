import {Component, input, InputSignal} from "@angular/core";
import {Chip} from "primeng/chip";

@Component({
  selector: "app-simple-chip",
  imports: [Chip],
  templateUrl: "./simple-chip.component.html",
  styleUrl: "./simple-chip.component.scss",
  standalone: true,
})
export class SimpleChipComponent {
  public label: InputSignal<string> = input.required();
}
