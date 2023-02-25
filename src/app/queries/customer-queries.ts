import { Apollo, gql } from "apollo-angular";
import { map, Observable } from "rxjs";
import { Page, Pageable } from "../shared/page";
import { CustomerResponse } from "../services/inventory-api.service";
import { Customer } from "../models/customer";
import { InventoryFilters } from "../inventory/inventory-data.service";

export interface CustomerFilters {
  id?: string | undefined;
  code?: string | undefined;
  description?: string | undefined;
}

export function getAllCustomers(apollo: Apollo, filters: CustomerFilters): Observable<Customer[]> {
  return apollo.watchQuery<{
    customer: Page<CustomerResponse>;
  }>({
    query: gql`
      query SearchAvailableCustomers($first: Int, $last: Int, $after: String, $before: String, $code: String, $description: String, $id: UUID) {
        customer(
          first: $first
          last: $last
          after: $after
          before: $before
          input: {
            code: $code
            descriptionContains: $description
            equipmentId: $id
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
      ...new Pageable<CustomerFilters>(filters)
        .setFirst(10)
    }
  })
    .valueChanges
    .pipe(
      map((response) => {
        return Page.fromData<CustomerResponse>(response.data.customer).getEdges().map(Customer.fromCustomerResponse);
      })
    );
}

export function getCustomerById(apollo: Apollo, customerId: InventoryFilters): Observable<Customer> {
  return apollo.watchQuery<{
    customerById: CustomerResponse;
  }>({
    query: gql`
      query GetCustomerById($customerId: UUID!) {
        customerById(customerId: $customerId) {
          id
          name
          code
          description
        }
      }
    `,
    variables: {
      customerId
    }
  })
    .valueChanges
    .pipe(
      map((response) => {
        return Customer.fromCustomerResponse(response.data.customerById);
      })
    );
}
