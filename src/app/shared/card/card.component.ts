import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: false
})
export class CardComponent {
  @Input() public title: string
  @Input() public status: string
  @Input() public allocatedTime: string;
  @Input() public totalTime: string;
  @Input() public imageUrl: string;

  public get backgroundImage() {
    return {
      'background-image': this.imageUrl ? `url(${this.imageUrl})` : 'none'
    }
  }
}
