import {Injectable, Signal} from '@angular/core';
import {HttpClient, httpResource, HttpResourceRef} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ApiResponse, PaginatedApiResponse} from "../models/api/api-response";
import {Team, TeamInfoResponse} from "../models/team";
import {map, Observable} from "rxjs";
import {EmployeeId} from "../models/ids/employee-id";
import {TeamId} from "../models/ids/team-id";

export class CreateTeamRequest {
  constructor(
    public name: string,
    public description: string,
    public team_lead_id: EmployeeId,
    public team_member_ids: EmployeeId[]
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private endpoint: string;

  constructor(
    private http: HttpClient
  ) {
    this.endpoint = `${environment.projekterApi}/teams`;
  }

  public getTeams(): HttpResourceRef<Team[]> {
    return httpResource<Team[]>(
      () => this.endpoint,
      {
        parse: (result: PaginatedApiResponse<TeamInfoResponse>)=> {
          return result.data.map(x => Team.fromRequest(x));
        }
      }
    )
  }

  public getTeam(teamId: Signal<TeamId>): HttpResourceRef<Team> {
    return httpResource<Team>(
      () => this.endpoint + `/${teamId().toString()}`,
      {
        parse: (result: ApiResponse<TeamInfoResponse>) => {
          return Team.fromRequest(result.data);
        }
      }
    );
  }

  public createTeam(request: CreateTeamRequest): Observable<Team> {
    return this.http
      .post<ApiResponse<TeamInfoResponse>>(this.endpoint, request)
      .pipe(
        map((response) => {
          return Team.fromRequest(response.data);
        })
      );
  }
}
