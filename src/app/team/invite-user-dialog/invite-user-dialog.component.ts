import { Component } from "@angular/core";
import {Dialog} from "primeng/dialog";
import {IftaLabel} from "primeng/iftalabel";
import {InputText} from "primeng/inputtext";
import {Button} from "primeng/button";

@Component({
  selector: "app-invite-user-dialog",
  imports: [
    Dialog,
    IftaLabel,
    InputText,
    Button
  ],
  templateUrl: "./invite-user-dialog.component.html",
  styleUrl: "./invite-user-dialog.component.scss"
})
export class InviteUserDialogComponent {

}
