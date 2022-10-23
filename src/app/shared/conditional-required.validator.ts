import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export function conditionalRequired(master: string, slaves: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let errors = {};
        const slaveControls: { key: string; control: AbstractControl }[] = [];

        for (let slaveControlKey of slaves) {
            const slaveControl = control.get(slaveControlKey);
            if (slaveControl === undefined || slaveControl === null) {
                throw new Error(`Control Key '${slaveControlKey}' is invalid`);
            }
            slaveControls.push({
                key: slaveControlKey,
                control: slaveControl
            });
        }

        if (!Validators.required(control.get(master)!)) {
            for (let slaveControl of slaveControls) {
                const error = Validators.required(slaveControl.control);
                const newErrors = {
                    ...slaveControl.control.errors,
                    ...error
                };
                if (Object.keys(newErrors).length !== 0) {
                    slaveControl.control.setErrors(newErrors);
                    errors = {
                        ...errors,
                        [slaveControl.key]: {
                            ...error
                        }
                    };
                }
            }

            if (Object.keys(errors).length === 0) {
                // there are no error return null
                return null;
            }

            return errors;
        } else {
            for (let slaveControl of slaveControls) {
                let errors: ValidationErrors | null = slaveControl.control?.errors;
                const errorRequired = slaveControl.control?.getError("required");
                if (errors !== null && errorRequired) {
                    delete errors?.["required"];
                    slaveControl.control.setErrors(errors);
                    if (Object.keys(errors).length === 0) {
                        slaveControl.control.setErrors(null);
                    }
                }
            }

            return null;
        }
    };
}
