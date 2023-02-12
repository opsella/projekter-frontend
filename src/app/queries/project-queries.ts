import { Page, Pageable } from "../shared/page";
import { Project } from "../models/project";
import { map, Observable } from "rxjs";
import { Apollo, gql } from "apollo-angular";
import { ProjectResponse } from "../services/projects-api.service";

export interface ProjectFilters {
  id?: string | undefined;
  code?: string | undefined;
  description?: string | undefined;
}
export function getAllProjects(apollo: Apollo, filters: ProjectFilters): Observable<Project[]> {
  return apollo.watchQuery<{
    project: Page<ProjectResponse>;
  }>({
    query: gql`
      query SearchAvailableProjects($first: Int, $last: Int, $after: String, $before: String, $code: String, $description: String, $id: UUID) {
        projects(
          first: $first
          last: $last
          after: $after
          before: $before
          input: {
            code: $code
            descriptionContains: $description
            projectId: $id
          }
        ) {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              id
              name
              code
              description
            }
          }
        }
      }
    `,
    variables: {
      ...new Pageable<ProjectFilters>(filters)
        .setFirst(10)
    }
  })
    .valueChanges
    .pipe(
      map((response) => {
        return Page.fromData<ProjectResponse>(response.data.project).getEdges().map(Project.fromProjectResponse);
      })
    );
}
