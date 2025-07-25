import { Component } from "@angular/core";
import { ContentSectionComponent } from "../../shared/content-section/content-section.component";
import { HttpResourceRef } from "@angular/common/http";
import {SimpleTableComponent, TableConfig} from "../../shared/simple-table/simple-table.component";
import {Button} from "primeng/button";
import {UsersService} from "../../user/services/users.service";
import {CreateTeamRequest, TeamsService} from "../teams.service";
import {Team} from "../../models/team";
import {Toolbar} from "primeng/toolbar";
import {Breadcrumb} from "primeng/breadcrumb";
import {MenuItem} from "primeng/api";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {CreateTeamDialogComponent} from "../create-team-dialog/create-team-dialog.component";
import {Observable, of, switchMap, take} from "rxjs";
import {AlertService} from "../../core/alert.service";
import {Router} from "@angular/router";
import {TeamId} from "../../models/ids/team-id";
import {User} from "../../models/user";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.scss"],
  imports: [ContentSectionComponent, SimpleTableComponent, Button, Toolbar, Breadcrumb],
  standalone: true,
})
export class TeamListComponent {
  protected teams: HttpResourceRef<Team[]> = this.teamService.getTeams();
  protected users: HttpResourceRef<User[]> = this.userServices.getUsers();

  protected breadcrumbItems: MenuItem[] = [
    {
      label: "Teams",
      routerLink: "/team"
    },
  ];
  protected home: MenuItem = {
    icon: 'pi pi-home',
    routerLink: "/project"
  }

  protected tableConfig: TableConfig<Team> = {
    columns: [
      {
        id: 'id',
        name: 'Id',
        key: 'id'
      },
      {
        id: 'name',
        name: "Team Name",
        key: 'name'
      },
      {
        id: 'description',
        name: 'Description',
        key: 'description'
      },
    ],
    actions: [
      {
        icon: "pi pi-info-circle",
        severity: "primary",
        tooltip: "View Details",
        fn: async (item) => {
          console.log(item.id.toString());
          await this.viewDetails(item.id);
        }
      }
    ]
  };

  constructor(
    private userServices: UsersService,
    private teamService: TeamsService,
    private dialogService: DialogService,
    private alertService: AlertService,
    private router: Router
  ) {
  }

  public createTeam(): void {
    const dialog: DynamicDialogRef<CreateTeamDialogComponent> = this.dialogService
      .open(CreateTeamDialogComponent, {
        header: "Create New Team",
        contentStyle: { "overflow": "auto" },
        inputValues: {
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
              ? this.teamService.createTeam(result)
              : (of(null) as Observable<Team>);
          }
        ),
        take(1)
      )
      .subscribe({
        next: async (result: Team): Promise<void> => {
          if (result) {
            await this.viewDetails(result.id);
            this.alertService.error("Created", "Team created successfully");
          } else {
            this.alertService.warn("Canceled", "Team creation was cancelled");
          }
        },
        error: (): void => {
          this.alertService.error("Failed", "Team creation failed, please try again");
        }
      });
  }

  private async viewDetails(id: TeamId): Promise<void> {
    await this.router.navigate([`/team/details`, id.toString()]);
  }
}
