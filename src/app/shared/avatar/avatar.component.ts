import { Component, Input } from "@angular/core";
import { MatIconButton } from "@angular/material/button";
import { NgOptimizedImage } from "@angular/common";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrl: "./avatar.component.scss",
  imports: [MatIconButton, NgOptimizedImage, MatIcon],
  standalone: true,
})
export class AvatarComponent {
  @Input() public photo?: string;
}
