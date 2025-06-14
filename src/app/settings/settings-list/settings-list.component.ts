import { Component } from "@angular/core";
import { PageWrapperComponent } from "../../shared/page-wrapper/page-wrapper.component";

@Component({
  selector: "app-settings-list",
  templateUrl: "./settings-list.component.html",
  styleUrls: ["./settings-list.component.scss"],
  imports: [PageWrapperComponent],
  standalone: true,
})
export class SettingsListComponent {}
