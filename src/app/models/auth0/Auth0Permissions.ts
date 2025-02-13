import { JsonObject, JsonProperty } from "typescript-json-serializer";

@JsonObject()
export class Auth0PermissionSources {
  constructor(
    @JsonProperty({ name: "id", required: true })
    public sourceId: string,
    @JsonProperty({ name: "name", required: true })
    public sourceName: string,
    @JsonProperty({ name: "type", required: true })
    public sourceType: string,
  ) {
  }
}

@JsonObject()
export class Auth0Permissions {
  constructor(
    @JsonProperty({ name: "name", required: true })
    public permissionName: string,

    @JsonProperty({ name: "description" })
    public description: string,

    @JsonProperty({ name: "resourceServerName" })
    public resourceServerName: string,

    @JsonProperty({ name: "identifier" })
    public resourceServerIdentifier: string,

    @JsonProperty({ name: "sources", dataStructure: "array" })
    public sources: Auth0PermissionSources[]
  ) {
  }
}
