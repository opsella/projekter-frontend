import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

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

    public options = [
        {
            id: 'logout',
            name: 'Logout',
            handler: () => this.logout(),
            isVisible: () => true,
        },
        {
            id: 'settings',
            name: 'Settings',
            handler: () => this.settings(),
            isVisible: () => true,
        },
        {
            id: 'profile',
            name: 'Profile',
            handler: () => this.profile(),
            isVisible: () => true,
        }
    ]

    constructor(
        public auth: AuthService
    ) { }

    public logout() {
        this.auth.logout({ returnTo: document.location.origin })
    }
}
