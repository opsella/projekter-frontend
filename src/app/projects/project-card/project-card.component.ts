import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { SimpleChipComponent } from '../../shared/simple-chip/simple-chip.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector : "app-project-card",
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatBadgeModule,
    SimpleChipComponent,
    NgOptimizedImage
  ],
  templateUrl : "./project-card.component.html",
  styleUrl    : "./project-card.component.scss"
})
export class ProjectCardComponent {
  @Input() public title: string;
  @Input() public status: string = "In Construction";
  @Input() public photo: string;
  @Input() public alerts: number = 0;
  @Input() public location: string = "1110 W 2600 N, Layton, UT, 84041"
}
