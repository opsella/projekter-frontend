import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

@Component({
    selector: "app-inventory-supplies-creation",
    templateUrl: "./inventory-supplies-creation.component.html",
    styleUrls: ["./inventory-supplies-creation.component.scss"],
})
export class InventorySuppliesCreationComponent {
    public categories = ['Tools', 'Vehicles']

    constructor(private _formBuilder: FormBuilder) {}

    public itemInformationGroup = this._formBuilder.group({
        name: new FormControl('', [Validators.required]),
        code: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        qty: new FormControl('', [Validators.required])
    });

    public categoryInformationGroup = this._formBuilder.group({
        options: new FormControl(this.categories),
        name: new FormControl(''),
        description: new FormControl(''),
    }, {
      validators: [
        this.conditionalRequired('name', ['description']),
        this.conditionalRequired('description', ['name'])
      ]
    });


  private conditionalRequired(master: string, slaves: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const masterValue = control.get(master)?.value;
      let errors = {};

      if (masterValue !== undefined && masterValue !== null) {
        for (let slaveControlKey of slaves) {
          const slaveControl = control.get(slaveControlKey);
          if (slaveControl === undefined || slaveControl === null) {
            throw new Error(`Control Key '${slaveControlKey}' is invalid`);
          }
          const error = Validators.required(slaveControl);
          if (error) {
            errors = { ...errors, error };
          }
        }

        if (Object.keys(errors).length === 0) {
          // there are no error return null
          return null;
        }
      }
      return errors;
    };
  }
}
