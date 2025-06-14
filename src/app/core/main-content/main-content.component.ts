import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"],
  imports: [RouterOutlet],
  standalone: true,
})
export class MainContentComponent {}
