import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { onlyOneValidator } from "../../shared/only-one.validator";
import { Subscription, tap } from "rxjs";

@Component({
    selector: "app-equipment-creation-page",
    templateUrl: "./equipment-creation-page.component.html",
    styleUrls: ["./equipment-creation-page.component.scss"],
})
export class EquipmentCreationPageComponent implements OnInit, OnDestroy {
    public categories = [null, "Tools", "Vehicles"];

    constructor(private _formBuilder: FormBuilder) {}

    public itemInformationGroup = this._formBuilder.group({
        name: new FormControl("", [Validators.required]),
        code: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required])
    });

    public categoryInformationGroup = this._formBuilder.group({
        existingCategory: this._formBuilder.group({
            category: new FormControl(null, [ Validators.required ])
        }),
        newCategory: this._formBuilder.group({
            name: new FormControl("", [Validators.required]),
            description: new FormControl("", [Validators.required])
        })
    }, {
        validators: [
            onlyOneValidator(["existingCategory", "newCategory"])
        ],
    });

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }

    private subscriptions: Subscription[] = [];
    public ngOnInit(): void {
        this.subscriptions.push(this.categoryInformationGroup.controls.existingCategory.statusChanges.pipe(
            tap((status: string) => {
                if (status === "VALID") {
                    this.categoryInformationGroup.controls.newCategory.disable();
                } else {
                    this.categoryInformationGroup.controls.newCategory.enable();
                }
            })
        ).subscribe());

        this.subscriptions.push(this.categoryInformationGroup.controls.newCategory.statusChanges.pipe(
            tap((status: string) => {
                if (status === "VALID") {
                    this.categoryInformationGroup.controls.existingCategory.disable();
                } else {
                    this.categoryInformationGroup.controls.existingCategory.enable();
                }
            })
        ).subscribe());
    }
}
