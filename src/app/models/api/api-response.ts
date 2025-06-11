import { JsonObject, JsonProperty } from "typescript-json-serializer";

@JsonObject()
export class ApiResponse<TResponseData> {
  constructor(
    @JsonProperty({ name: "data" })
    public data: TResponseData
  ) {
  }
}

@JsonObject()
export class PaginatedApiResponse<TResponseData> {
  constructor(
    @JsonProperty({ name: "metadata" })
    public metadata: PaginationMetadata,
    @JsonProperty({ name: "data" })
    public data: TResponseData[]
  ) {
  }
}

@JsonObject()
export class PaginationMetadata {
  constructor(
    public start_index: number,
    public total_items: number,
    public limit: number,
    public length: number,
    public has_next_page: boolean,
    public has_previous_page: boolean,
    public next_index: number,
    public previous_index: number
  ) {
  }
}
