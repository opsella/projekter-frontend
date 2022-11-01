import { TestBed } from "@angular/core/testing";

import { InventoryCategoryFormBuilderService } from "./inventory-category-form-builder.service";

describe("InventoryCategoryFormBuilderService", () => {
    let service: InventoryCategoryFormBuilderService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(InventoryCategoryFormBuilderService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
