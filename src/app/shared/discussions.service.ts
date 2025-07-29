import {Injectable, Signal} from '@angular/core';
import {Discussion, DiscussionInfoResponse, MessageContentType} from "../models/discussion";
import {DiscussionId} from "../models/ids/discussion-id";
import {HttpClient, httpResource, HttpResourceRef} from "@angular/common/http";
import {ApiResponse} from "../models/api/api-response";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";

export interface WriteDiscussionRequest {
  discussion_id: DiscussionId;
  content_type: MessageContentType;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class DiscussionsService {
  private endpoint: string = `${environment.projekterApi}/discussions`;

  constructor(
    private http: HttpClient
  ) {
  }

  public getDiscussion(id: Signal<DiscussionId>): HttpResourceRef<Discussion> {
    return httpResource(
      () => {
        const discussionId = id()?.toString();
        if (discussionId) {
          return `${this.endpoint}/${discussionId}`;
        }
        return undefined;
      },
      {
        parse: (result: ApiResponse<DiscussionInfoResponse>)=> {
          return Discussion.fromResponse(result.data);
        },
      }
    );
  }

  public createDiscussion(): Observable<Discussion> {
    return this.http
      .post<ApiResponse<DiscussionInfoResponse>>(`${this.endpoint}/`, undefined)
      .pipe(
        map((response) => {
          return Discussion.fromResponse(response.data);
        })
      );
  }

  public writeMessage(request: WriteDiscussionRequest): Observable<Discussion> {
    const discussionId = request.discussion_id.toString();

    return this.http
      .post<ApiResponse<DiscussionInfoResponse>>(`${this.endpoint}/${discussionId}/message`, request)
      .pipe(
        map((response) => {
          return Discussion.fromResponse(response.data);
        })
      );
  }
}
