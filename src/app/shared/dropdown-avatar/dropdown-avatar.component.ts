import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-avatar',
  templateUrl: './dropdown-avatar.component.html',
  styleUrls: ['./dropdown-avatar.component.scss']
})
export class DropdownAvatarComponent implements OnInit {
    @Input() options: Array<string> = []

    constructor() { }

    ngOnInit(): void {
    }

}
