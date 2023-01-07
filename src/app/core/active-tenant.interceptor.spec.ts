import { TestBed } from "@angular/core/testing";

import { ActiveTenantInterceptor } from "./active-tenant.interceptor";

describe("ActiveTenantInterceptor", () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ActiveTenantInterceptor
    ]
  }));

  it("should be created", () => {
    const interceptor: ActiveTenantInterceptor = TestBed.inject(ActiveTenantInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
