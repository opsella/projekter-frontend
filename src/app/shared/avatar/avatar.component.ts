import {Component, input, InputSignal} from "@angular/core";
import {Button} from "primeng/button";
import {Avatar} from "primeng/avatar";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrl: "./avatar.component.scss",
  imports: [Button, Avatar],
  standalone: true,
})
export class AvatarComponent {
  public photo: InputSignal<string | undefined | null> = input();
}
