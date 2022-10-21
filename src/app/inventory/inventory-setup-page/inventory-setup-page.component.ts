import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
    selector: "app-inventory-setup-page",
    templateUrl: "./inventory-setup-page.component.html",
    styleUrls: ["./inventory-setup-page.component.scss"],
})
export class InventorySetupPageComponent implements OnInit {
    public createInventory = false;
    public route: Observable<string | null> = new BehaviorSubject<string | null>(
        "/inventory/create/supplies"
    );

    constructor(private _formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.route = this.inventoryType.controls.options.valueChanges;
    }

    public inventoryType = this._formBuilder.group({
        options: ["/inventory/create/supplies", Validators.required],
    });

    public startInventoryCreation() {
        this.createInventory = !this.createInventory;
    }
}
