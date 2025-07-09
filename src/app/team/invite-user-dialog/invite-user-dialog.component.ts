import { Component } from "@angular/core";
import { MatDialogActions, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";
import { MatFormField, MatInput, MatLabel } from "@angular/material/input";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "app-invite-user-dialog",
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatDialogActions,
    MatButton,
    MatFormField,
    MatLabel
  ],
  templateUrl: "./invite-user-dialog.component.html",
  styleUrl: "./invite-user-dialog.component.scss"
})
export class InviteUserDialogComponent {

}
