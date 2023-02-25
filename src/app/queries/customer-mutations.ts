import { Apollo, gql, MutationResult } from "apollo-angular";
import { Observable } from "rxjs";
import { Customer } from "../models/customer";

export interface CustomerEditResponse {
  id: string;
  name: string | undefined;
  code: string | undefined;
  description: string | undefined;
}

export function createCustomer(apollo: Apollo, customer: Customer): Observable<MutationResult<{ registerCustomer: {tenantId: string; customerId: string; name: string}}>> {
  return apollo.mutate<{
    registerCustomer: {tenantId: string; customerId: string; name: string};
  }>({
    mutation: gql`
      mutation CreateCustomer {
        createCustomer(
          input: {
            name: "foo",
            code: "bar2",
            category: "cat",
            location: "1110 W 2600 N Layton, UT 84041"
            locationDescription: "home",
            status: "ready",
            summary: "My home projects",
            description: "Myself at home",
            primaryContact: {
              name: "Kayden Miller",
              phoneNumber: "801-388-5765",
              preferredContactMethod: "call",
              notes: "Leave me alone unless you bring money"
            },
            otherContacts: [
              {
                name: "Derek",
                phoneNumber: "8900999999",
                preferredContactMethod: "Not at all",
                notes: "do not call unless emergency"
              }
            ]
          }) {
            eventType
            customerId
          }
      }
    `,
    variables: {
      ...customer
    }
  });
}

export function editCustomer(apollo: Apollo, customer: CustomerEditResponse): Observable<MutationResult<{ updateCustomer: { id: string }}>> {
  return apollo.mutate<{
    updateCustomer: {id: string};
  }>({
    mutation: gql`
      updateCustomer(
        input: {
          name: "foo",
          code: "bar2",
          category: "cat",
          location: "1110 W 2600 N Layton, UT 84041"
          locationDescription: "home",
          status: "ready",
          summary: "My home projects",
          description: "Myself at home",
          primaryContact: {
            name: "Kayden Miller",
            phoneNumber: "801-388-5765",
            preferredContactMethod: "call",
            notes: "Leave me alone unless you bring money"
          },
          otherContacts: [
            {
              name: "Derek",
              phoneNumber: "8900999999",
              preferredContactMethod: "Not at all",
              notes: "do not call unless emergency"
            }
          ]
        }
        ) {
          customerId
          }
        }
    `,
    variables: {
      ...customer
    }
  });
}
