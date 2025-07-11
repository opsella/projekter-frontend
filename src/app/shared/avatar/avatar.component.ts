import { Component, Input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import {Button} from "primeng/button";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrl: "./avatar.component.scss",
  imports: [NgOptimizedImage, Button],
  standalone: true,
})
export class AvatarComponent {
  @Input() public photo?: string;
}
