import {Component, effect, ElementRef, input, InputSignal, ViewChild} from '@angular/core';
import {Message} from "../../models/discussion";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-discussion-message-block',
  imports: [
    DatePipe
  ],
  templateUrl: './discussion-message-block.component.html',
  styleUrl: './discussion-message-block.component.scss'
})
export class DiscussionMessageBlockComponent {
  public message: InputSignal<Message> = input.required();
  @ViewChild("content", { static: true }) protected contentDiv: ElementRef;

  constructor() {
    effect(() => {
      this.contentDiv.nativeElement.innerHTML = this.message().content;
    });
  }
}
