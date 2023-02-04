import { AbstractControl, ValidationErrors } from "@angular/forms";

export function onlyOneValidator(controlKeys: string[]) {
  return (control: AbstractControl): ValidationErrors | null => {
    let countOfValidControls = 0;
    for (const key of controlKeys) {
      const controlToCheck = control.get(key);

      if (controlToCheck === null || controlToCheck === undefined) {
        throw new Error(`Error: Invalid control key specified key was ${key}`);
      }

      countOfValidControls += controlToCheck?.valid ? 1 : 0;
    }

    if (countOfValidControls !== 1) {
      // the count is not exactly one
      return {
        onlyOneValid: {
          actualValidCount   : countOfValidControls,
          expectedValidCount : 1
        }
      };
    }

    return null;
  };
}
