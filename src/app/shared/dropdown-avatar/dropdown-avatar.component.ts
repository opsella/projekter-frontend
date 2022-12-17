import {Component, Input, OnInit} from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-dropdown-avatar',
  templateUrl: './dropdown-avatar.component.html',
  styleUrls: ['./dropdown-avatar.component.scss']
})
export class DropdownAvatarComponent implements OnInit {
    @Input() options: DropDownAvatarElementConfig[] = []
    @Input() avatarUrl: string | undefined = ""

    constructor() { }

    ngOnInit(): void {
    }


    public selectionChangedHandler($event: MatSelectChange): void {
        this.options.find(option => option.id === $event.value)?.handler()
    }
}

export interface DropDownAvatarElementConfig {
    id: string,
    name: string,
    handler: () => void,
    isVisible: () => boolean,
}
