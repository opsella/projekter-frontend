import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EquipmentCreationPageComponent } from "./equipment-creation-page.component";

describe("InventoryEquipmentCreationComponent", () => {
    let component: EquipmentCreationPageComponent;
    let fixture: ComponentFixture<EquipmentCreationPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ EquipmentCreationPageComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(EquipmentCreationPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
