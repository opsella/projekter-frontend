import { TestBed } from "@angular/core/testing";

import { ProjectTemplateDataService } from "./project-template-data.service";

describe("ProjectTemplateDataService", () => {
  let service: ProjectTemplateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectTemplateDataService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
