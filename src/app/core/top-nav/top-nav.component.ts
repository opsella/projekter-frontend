import { Component } from "@angular/core";

@Component({
    selector: "app-top-nav",
    templateUrl: "./top-nav.component.html",
    styleUrls: ["./top-nav.component.scss"]
})
export class TopNavComponent {
    public user = {
        fullName: "Jessen Gilbert",
        permission: "Admin",
        avatar: 'assets/images/projekter-logo.png'
    }

    public options = ['Profile', 'Settings']

    constructor() { }

}
