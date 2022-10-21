import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InventorySetupPageComponent } from "./inventory-setup-page.component";

describe("InventorySetupPageComponent", () => {
    let component: InventorySetupPageComponent;
    let fixture: ComponentFixture<InventorySetupPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ InventorySetupPageComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(InventorySetupPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
