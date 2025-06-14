import { Component, Input } from "@angular/core";

@Component({
  selector: "app-page-wrapper",
  templateUrl: "./page-wrapper.component.html",
  styleUrls: ["./page-wrapper.component.scss"],
  standalone: true,
})
export class PageWrapperComponent {
  @Input() public title = "";
}
