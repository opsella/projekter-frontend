import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InventoryEquipmentCreationComponent } from "./inventory-equipment-creation.component";

describe("InventoryEquipmentCreationComponent", () => {
    let component: InventoryEquipmentCreationComponent;
    let fixture: ComponentFixture<InventoryEquipmentCreationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ InventoryEquipmentCreationComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(InventoryEquipmentCreationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
