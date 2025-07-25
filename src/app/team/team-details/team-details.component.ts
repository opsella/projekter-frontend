import {Component, inject, Signal, signal} from '@angular/core';
import {ContentSectionComponent} from "../../shared/content-section/content-section.component";
import {MenuItem} from "primeng/api";
import {Breadcrumb} from "primeng/breadcrumb";
import {ActivatedRoute} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {HttpResourceRef} from "@angular/common/http";
import {Team} from "../../models/team";
import {TeamsService} from "../teams.service";
import {TeamId} from "../../models/ids/team-id";
import {UsersService} from "../../user/services/users.service";
import {UserId} from "../../models/ids/user-id";
import {User} from "../../models/user";
import {Avatar} from "primeng/avatar";
import {Divider} from "primeng/divider";

@Component({
  selector: 'app-team-details',
  imports: [
    ContentSectionComponent,
    Breadcrumb,
    Avatar,
    Divider
  ],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.scss'
})
export class TeamDetailsComponent {
  private route = inject(ActivatedRoute);
  private params = toSignal(this.route.params, { initialValue: { id: "" }});
  private teamId: Signal<TeamId> = signal(new TeamId(this.params().id));

  protected team: HttpResourceRef<Team> = this.teamService.getTeam(this.teamId);
  protected users: HttpResourceRef<User[]> = this.usersService.getUsers();

  protected breadcrumbItems: MenuItem[] = [
    {
      label: "Teams",
      routerLink: "/team"
    },
    {
      label: "Team",
    }
  ];
  protected home: MenuItem = {
    icon: 'pi pi-home',
    routerLink: "/project"
  }

  constructor(
    private teamService: TeamsService,
    private usersService: UsersService,
  ) {
  }

  protected findMatchingUser(userId: UserId): User | undefined {
    return this.users.value()?.find(x => x.id.value == userId.value);
  }
}
