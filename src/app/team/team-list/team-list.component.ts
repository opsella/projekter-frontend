import { Component } from "@angular/core";
import { PageWrapperComponent } from "../../shared/page-wrapper/page-wrapper.component";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.scss"],
  imports: [PageWrapperComponent],
  standalone: true,
})
export class TeamListComponent {}
