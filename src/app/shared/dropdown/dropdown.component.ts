import { Component, Input } from "@angular/core";

export interface DropdownElementConfig {
  id: string;
  name: string;
  handler: () => void;
  isVisible: () => boolean;
}

@Component({
  selector: "app-dropdown",
  imports: [],
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.scss",
  standalone: true,
})
export class DropdownComponent {
  @Input() public options: DropdownElementConfig[] = [];
  @Input() public position: "bottom-left" | "bottom";

  protected isOpen = false;
  protected cornerPosition: number = 100;

  public toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  protected handleClicked(id: string): void {
    this.options.find((option) => option.id === id)?.handler();
  }
}
