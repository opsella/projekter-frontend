import { Component, Input } from "@angular/core";
import {Toolbar} from "primeng/toolbar";
import {Button} from "primeng/button";

@Component({
  selector: "app-content-section",
  imports: [Toolbar, Button],
  templateUrl: "./content-section.component.html",
  styleUrl: "./content-section.component.scss",
  standalone: true,
})
export class ContentSectionComponent {
  @Input() public title: string;
  @Input() public expandable: boolean = false;
  @Input() public expanded: boolean = true;

  protected toggleExpansion() {
    this.expanded = !this.expanded;
  }
}
