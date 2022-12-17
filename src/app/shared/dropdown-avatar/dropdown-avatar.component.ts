import { Component, Input } from "@angular/core";
import { MatLegacySelectChange as MatSelectChange } from "@angular/material/legacy-select";

@Component({
  selector    : "app-dropdown-avatar",
  templateUrl : "./dropdown-avatar.component.html",
  styleUrls   : [
    "./dropdown-avatar.component.scss"
  ]
})
export class DropdownAvatarComponent  {
    @Input() public options: DropDownAvatarElementConfig[] = [
    ];
    @Input() public avatarUrl: string | undefined = "";


    public selectionChangedHandler($event: MatSelectChange): void {
      this.options.find(option => option.id === $event.value)?.handler();
    }
}

export interface DropDownAvatarElementConfig {
    id: string;
    name: string;
    handler: () => void;
    isVisible: () => boolean;
}
