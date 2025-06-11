import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  standalone: false,
})
export class AvatarComponent {
  @Input() public photo?: string;
}
