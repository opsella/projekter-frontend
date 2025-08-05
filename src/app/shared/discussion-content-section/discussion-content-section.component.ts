import {
  Component,
  input,
  InputSignal, model,
  ModelSignal,
  output,
  OutputEmitterRef,
  signal,
  WritableSignal
} from '@angular/core';
import {Button} from "primeng/button";
import {ContentSectionComponent} from "../content-section/content-section.component";
import {DiscussionMessageBlockComponent} from "../discussion-message-block/discussion-message-block.component";
import {Editor} from "primeng/editor";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Timeline} from "primeng/timeline";
import {Discussion} from "../../models/discussion";
import {DiscussionsService} from "../discussions.service";
import {switchMap, take, tap} from "rxjs";
import {AlertService} from "../../core/alert.service";
import {DiscussionId} from "../../models/ids/discussion-id";

@Component({
  selector: 'app-discussion-content-section',
  imports: [
    Button,
    ContentSectionComponent,
    DiscussionMessageBlockComponent,
    Editor,
    ReactiveFormsModule,
    Timeline
  ],
  templateUrl: './discussion-content-section.component.html',
  styleUrl: './discussion-content-section.component.scss'
})
export class DiscussionContentSectionComponent {
  public discussion: ModelSignal<Discussion | null> = model(null, { alias: "discussion" });
  public messageWritten: OutputEmitterRef<Discussion> = output();

  protected form: FormGroup = new FormGroup({
    content: new FormControl("", { validators: [Validators.required]})
  });

  constructor(
    private discussionsService: DiscussionsService,
    private alertService: AlertService
  ) {
  }

  private createDiscussion(): void {
    this.discussionsService.createDiscussion()
      .pipe(
        take(1)
      )
      .subscribe({
        next: (response) => {
          this.discussion.set(response);
          this.writeMessageToDiscussion();
        },
        error: (error) => {
          this.alertService.error("Failed", "Failed to start a discussion");
        }
      });
  }

  private writeMessageToDiscussion(): void {
    this.discussionsService
      .writeMessage({
        discussion_id: this.discussion().id,
        content_type: "RichText",
        content: this.form.controls["content"].value
      })
      .pipe(
        take(1)
      )
      .subscribe({
        next: (result) => {
          this.discussion.set(result);
          this.messageWritten.emit(result);
          this.alertService.info("Message Successful", "Message written to project successfully");
        },
        error: (error) => {
          this.alertService.error("Message Failed", "Failed to write message to the project");
        },
        complete: () => {
          this.form.reset();
        }
      });
  }

  protected onSubmit(): void {
    if (!this.discussion()) {
      // A discussion has not yet been created
      this.createDiscussion();
    } else {
      // A discussion has already been created
      this.writeMessageToDiscussion();
    }
  }
}
