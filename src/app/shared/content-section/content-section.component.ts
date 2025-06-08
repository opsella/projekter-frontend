import { Component, Input } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-content-section',
  imports: [
    MatToolbar,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.scss'
})
export class ContentSectionComponent {
  @Input() title: string;
  @Input() expandable: boolean = true;
  @Input() expanded: boolean = true;

  protected toggleExpansion() {
    this.expanded = !this.expanded;
  }
}
