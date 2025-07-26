import {Component, inject, Signal, signal} from '@angular/core';
import {ContentSectionComponent} from "../../shared/content-section/content-section.component";
import {MenuItem} from "primeng/api";
import {Breadcrumb} from "primeng/breadcrumb";
import {ActivatedRoute} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {HttpResourceRef} from "@angular/common/http";
import {Team} from "../../models/team";
import {CreateTeamRequest, TeamsService} from "../teams.service";
import {TeamId} from "../../models/ids/team-id";
import {UsersService} from "../../user/services/users.service";
import {UserId} from "../../models/ids/user-id";
import {User} from "../../models/user";
import {Avatar} from "primeng/avatar";
import {Divider} from "primeng/divider";
import {Toolbar} from "primeng/toolbar";
import {Button} from "primeng/button";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {CreateTeamDialogComponent} from "../create-team-dialog/create-team-dialog.component";
import {Observable, of, switchMap, take} from "rxjs";
import {AlertService} from "../../core/alert.service";

@Component({
  selector: 'app-team-details',
  imports: [
    ContentSectionComponent,
    Breadcrumb,
    Avatar,
    Divider,
    Toolbar,
    Button
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
    private dialogService: DialogService,
    private alertService: AlertService,
  ) {
  }

  protected findMatchingUser(userId: UserId): User | undefined {
    return this.users.value()?.find(x => x.id.value == userId.value);
  }

  public updateTeam(): void {
    const dialog: DynamicDialogRef<CreateTeamDialogComponent> = this.dialogService
      .open(CreateTeamDialogComponent, {
        header: `Update team: ${this.team.value().name}`,
        contentStyle: { "overflow": "auto" },
        inputValues: {
          name: this.team.value().name,
          description: this.team.value().description,
          teamLead: this.findMatchingUser(this.team.value().teamLead.associatedUserId),
          teamMembers: this.team.value().teamMembers.map(x => this.findMatchingUser(x.associatedUserId)),
          possibleTeamLeads: this.users.value() ?? [],
          possibleTeamMembers: this.users.value() ?? [],
        },
        modal: true
      });

    dialog.onClose
      .pipe(
        switchMap(
          (result: CreateTeamRequest) : Observable<Team> => {
            return result instanceof CreateTeamRequest
              ? this.teamService.updateTeam(this.teamId(), result)
              : (of(null) as Observable<Team>);
          }
        ),
        take(1)
      )
      .subscribe({
        next: async (result: Team): Promise<void> => {
          if (result) {
            this.team.set(result);
            this.alertService.info("Created", "Team updated successfully");
          } else {
            this.alertService.warn("Canceled", "Team update was cancelled");
          }
        },
        error: (): void => {
          this.alertService.error("Failed", "Team update failed, please try again");
        }
      });
  }
}
