import { Component, Input } from "@angular/core";

@Component({
  selector    : "app-setup-page-wrapper",
  templateUrl : "./setup-page-wrapper.component.html",
  styleUrls   : [
    "./setup-page-wrapper.component.scss"
  ]
})
export class SetupPageWrapperComponent {
    @Input() public title = "";
    @Input() public flow1ButtonText = "";
    @Input() public flow2ButtonText = "";

    public flow: string | null = null;

    public startFlow(flow: string) {
      this.flow = flow;
    }

}
