import {DiscussionId} from "./ids/discussion-id";
import {TenantId} from "./ids/tenant-id";
import {MessageId} from "./ids/message-id";
import {UserId} from "./ids/user-id";

export interface DiscussionInfoResponse {
  id: string;
  tenant_id: string;
  created_at: Date;
  updated_at: Date;
  messages: MessageInfoResponse[];
}

export interface MessageInfoResponse {
  id: string;
  tenant_id: string;
  discussion_id: string;
  author_id: string;
  content_type: MessageContentType;
  content: string;
  created_at: Date;
  updated_at: Date;
}

export type MessageContentType = "PlainText" | "RichText" | "Markdown";

export class Discussion {
  constructor(
    public id: DiscussionId,
    public tenantId: TenantId,
    public createdAt: Date,
    public updatedAt: Date,
    public messages: Message[]
  ) {
  }

  public static fromResponse(response: DiscussionInfoResponse): Discussion {
    return new Discussion(
      DiscussionId.fromJSON(response.id),
      TenantId.fromJSON(response.tenant_id),
      response.created_at,
      response.updated_at,
      response.messages.map(x => Message.fromResponse(x))
    )
  }
}

export class Message {
  constructor(
    public id: MessageId,
    public tenantId: TenantId,
    public discussionId: DiscussionId,
    public authorId: UserId,
    public contentType: MessageContentType,
    public content: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {
  }

  public static fromResponse(response: MessageInfoResponse): Message {
    return new Message(
      MessageId.fromJSON(response.id),
      TenantId.fromJSON(response.tenant_id),
      DiscussionId.fromJSON(response.discussion_id),
      UserId.fromJSON(response.author_id),
      response.content_type,
      response.content,
      response.created_at,
      response.updated_at
    );
  }
}
