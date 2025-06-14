import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-action-footer",
  templateUrl: "./action-footer.component.html",
  styleUrls: ["./action-footer.component.scss"],
  standalone: true,
})
export class ActionFooterComponent {
  @Input() public actions: Action[] | undefined;
  @Output() public actionEvent: EventEmitter<Action> =
    new EventEmitter<Action>();

  protected handleClick(action: Action) {
    this.actionEvent.emit(action);
  }
}

export interface Action {
  text: string;
  action?(): void;
}
