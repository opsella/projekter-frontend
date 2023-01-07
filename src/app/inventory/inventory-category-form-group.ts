import { FormControl, FormGroup } from "@angular/forms";

export interface InventoryCategoryFormGroup {
    existingCategory: FormGroup<InventoryExistingCategoryFormGroup>;
    newCategory: FormGroup<InventoryNewCategoryFormGroup>;
}

export interface InventoryExistingCategoryFormGroup {
    category: FormControl<string | null>;
}

export interface InventoryNewCategoryFormGroup {
    name: FormControl<string>;
    description: FormControl<string>;
}
