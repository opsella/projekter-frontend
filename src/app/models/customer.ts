import { CustomerResponse } from "../services/inventory-api.service";
import { Contacts } from "./contacts";

export class Customer {
  constructor(
    public id: string,
    public code: string,
    public name: string,
    public status: string,
    public category: string,
    public location: string,
    public locationDescription: string,
    public summary: string,
    public description: string,
    public contacts: Contacts[]
  ) {
  }

  public static fromCustomerResponse(response: CustomerResponse) {
    return new Customer(response.id, response.code, response.name, response.status, response.category, response.location, response.locationDescription, response.summary, response.description, response.contacts);
  }

  public static isCustomer(value: unknown): value is Customer {
    return value instanceof Customer;
  }
}
