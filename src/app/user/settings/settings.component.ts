import { Component } from "@angular/core";
import { PageWrapperComponent } from "../../shared/page-wrapper/page-wrapper.component";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
  imports: [PageWrapperComponent],
  standalone: true,
})
export class SettingsComponent {
  constructor() {}
}
