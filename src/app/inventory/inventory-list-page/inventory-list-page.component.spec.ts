import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InventoryListPageComponent } from "./inventory-list-page.component";

describe("InventoryListPageComponent", () => {
    let component: InventoryListPageComponent;
    let fixture: ComponentFixture<InventoryListPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ InventoryListPageComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(InventoryListPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
