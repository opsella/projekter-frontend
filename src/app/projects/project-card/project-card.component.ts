import {Component, input, Input, InputSignal} from "@angular/core";
import { SimpleChipComponent } from "../../shared/simple-chip/simple-chip.component";
import {OverlayBadge} from "primeng/overlaybadge";
import {Card} from "primeng/card";
import {ProjectId} from "../../models/ids/project-id";
import {Button} from "primeng/button";
import {Router} from "@angular/router";
import {Chip} from "primeng/chip";

@Component({
  selector: "app-project-card",
  imports: [
    SimpleChipComponent,
    OverlayBadge,
    Card,
    Button,
    Chip,
  ],
  templateUrl: "./project-card.component.html",
  styleUrl: "./project-card.component.scss",
  standalone: true,
})
export class ProjectCardComponent {
  @Input({ alias: 'title' }) public projectName: string;
  @Input() public status: string = "In Construction";
  @Input() public photo: string;
  @Input() public alerts: number = 0;
  @Input() public location: string = "1110 W 2600 N, Layton, UT, 84041";
  public projectId: InputSignal<ProjectId> = input.required({ alias: 'id' });

  constructor(
    private router: Router
  ) {
  }

  public async viewDetails(id: ProjectId): Promise<void> {
    await this.router.navigate(["project/details", id.toString()]);
  }
}
