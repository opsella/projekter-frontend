import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  MatButtonToggle,
  MatButtonToggleChange,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { NgForOf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-toggle-button',
  imports: [
    MatButtonToggle,
    MatButtonToggleGroup,
    FormsModule,
    NgForOf,
    UpperCasePipe,
  ],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
})
export class ToggleButtonComponent {
  @Input() toggleOptions: string[] = [];
  @Input() view!: string;

  @Output() toggleChange = new EventEmitter<string>();

  public onToggleChange(event: MatButtonToggleChange) {
    this.toggleChange.emit(event.value);
  }
}
