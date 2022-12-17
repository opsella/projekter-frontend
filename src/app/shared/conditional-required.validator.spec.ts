import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { conditionalRequired } from "./conditional-required.validator";


describe("conditional-required", () => {
  it("should set form and control errors to null when none are found", () => {
    // Arrange
    const form = new FormBuilder().group({
      master        : new FormControl(""),
      requiredSlave : new FormControl("")
    }, {
      validators: [ conditionalRequired("master", ["requiredSlave"])]
    });

    // Act
    // Assert
    expect(form.errors).toBe(null);
    expect(form.controls.requiredSlave.errors).toBe(null);
  });

  it("should set form errors to control key and error code when error is found", () => {
    // Arrange
    const form = new FormBuilder().group({
      master        : new FormControl("a"),
      requiredSlave : new FormControl("")
    }, {
      validators: [ conditionalRequired("master", ["requiredSlave"])]
    });

    // Act
    // Assert
    expect(form.errors).toEqual({
      requiredSlave: {
        required: true
      }
    });
  });

  it("should set control errors to error code when error is found", () => {
    // Arrange
    const form = new FormBuilder().group({
      master        : new FormControl("a"),
      requiredSlave : new FormControl("")
    }, {
      validators: [ conditionalRequired("master", ["requiredSlave"])]
    });

    // Act
    // Assert
    expect(form.controls.requiredSlave.errors).toEqual({
      required: true
    });
  });

  it("should clean control up error codes after error is fixed", () => {
    // Arrange
    const form = new FormBuilder().group({
      master        : new FormControl("a"),
      requiredSlave : new FormControl("")
    }, {
      validators: [ conditionalRequired("master", ["requiredSlave"])]
    });

    // Act
    expect(form.controls.requiredSlave.errors).toEqual({
      required: true
    });
    form.patchValue({
      requiredSlave: "fixed"
    });

    // Assert
    expect(form.controls.requiredSlave.errors).toBe(null);
  });

  it("should work with paired master slaves", () => {
    // Arrange
    const form = new FormBuilder().group({
      master        : new FormControl("a"),
      requiredSlave : new FormControl("")
    }, {
      validators: [
        conditionalRequired("master", ["requiredSlave"]),
        conditionalRequired("requiredSlave", ["master"])
      ]
    });

    // Check required slave can go from invalid to valid
    expect(form.controls.requiredSlave.errors).toEqual({
      required: true
    });
    form.patchValue({
      requiredSlave: "fixed"
    });
    expect(form.controls.requiredSlave.errors).toBe(null);


    // reset
    form.patchValue({
      master        : "",
      requiredSlave : ""
    });
    expect(form.controls.master.errors).toBe(null);
    expect(form.controls.requiredSlave.errors).toBe(null);

    // Check master can go from invalid to valid
    form.patchValue({
      master        : "",
      requiredSlave : "a"
    });
    expect(form.controls.master.errors).toEqual({
      required: true
    });
    form.patchValue({
      master        : "fixed",
      requiredSlave : "a"
    });
    expect(form.controls.master.errors).toBe(null);
  });

  it("should work with other validators", () => {
    // Arrange
    const form = new FormBuilder().group({
      master        : new FormControl("a", Validators.minLength(2)),
      requiredSlave : new FormControl("")
    }, {
      validators: [
        conditionalRequired("master", ["requiredSlave"]),
        conditionalRequired("requiredSlave", ["master"])
      ]
    });

    expect(form.controls.master.errors).toEqual({
      minlength: {
        requiredLength : 2,
        actualLength   : 1
      }
    });
    expect(form.controls.requiredSlave.errors).toEqual({
      required: true
    });

    // update length to be valid
    form.patchValue({
      master: "aa"
    });
    expect(form.controls.master.errors).toBe(null);
    expect(form.controls.requiredSlave.errors).toEqual({
      required: true
    });
  });
});
