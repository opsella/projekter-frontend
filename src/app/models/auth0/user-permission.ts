import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export class UserPermissionsResponse {
  constructor(
    @JsonProperty({ name: "user_permissions"})
    public permissions: UserPermission[]
  ) {
  }
}

@JsonObject()
export class UserPermission {
  constructor(
    @JsonProperty({ name: "permission_name", required: true })
    public permissionName: string,

    @JsonProperty({ name: "description", required: true })
    public description: string,
  ) {
  }
}
