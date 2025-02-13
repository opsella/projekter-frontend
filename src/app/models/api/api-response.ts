import { JsonObject, JsonProperty } from "typescript-json-serializer";

@JsonObject()
export class ApiResponse<TResponseData> {
  constructor(
    @JsonProperty({ name: "data" })
    public data: TResponseData
  ) {
  }
}
