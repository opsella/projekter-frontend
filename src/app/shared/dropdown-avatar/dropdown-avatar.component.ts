import { Component, Input } from "@angular/core";

@Component({
  selector    : "app-dropdown-avatar",
  templateUrl : "./dropdown-avatar.component.html",
  styleUrls   : ["./dropdown-avatar.component.scss"]
})
export class DropdownAvatarComponent  {
    @Input() public options: DropDownAvatarElementConfig[] = [];
    @Input() public avatarUrl: string | undefined = "";

    protected dropdownOpen = false;

    protected openDropdown(): void {
      this.dropdownOpen = !this.dropdownOpen;
    }

    protected dropdownClicked(id: string): void {
      this.options.find(option => option.id === id)?.handler();
    }
}

export interface DropDownAvatarElementConfig {
    id: string;
    name: string;
    handler: () => void;
    isVisible: () => boolean;
}
