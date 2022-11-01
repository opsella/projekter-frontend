import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InventoryCategoryFormGroup, } from "../inventory-category-form-group";
import { Subscription, tap } from "rxjs";

@Component({
    selector: "app-inventory-category-creation-form",
    templateUrl: "./inventory-category-creation-form.component.html",
    styleUrls: ["./inventory-category-creation-form.component.scss"]
})
export class InventoryCategoryCreationFormComponent implements OnInit, OnDestroy {
    @Input() public categoryCreationForm!: FormGroup<InventoryCategoryFormGroup>;
    @Input() public categories: (string)[] = [];

    constructor() { }

    private subscriptions: Subscription[] = [];
    public ngOnInit(): void {
        this.subscriptions.push(this.categoryCreationForm.controls.existingCategory.statusChanges.pipe(
            tap((status: string) => {
                if (status === "VALID") {
                    this.categoryCreationForm.controls.newCategory.disable();
                } else {
                    this.categoryCreationForm.controls.newCategory.enable();
                }
            })
        ).subscribe());

        this.subscriptions.push(this.categoryCreationForm.controls.newCategory.statusChanges.pipe(
            tap((status: string) => {
                if (status === "VALID") {
                    this.categoryCreationForm.controls.existingCategory.disable();
                } else {
                    this.categoryCreationForm.controls.existingCategory.enable();
                }
            })
        ).subscribe());
    }

    public ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
}
