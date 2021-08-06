import {AbstractControl} from "@angular/forms";

export const customLimitValidators = (control: AbstractControl) => {
  if (control.value > 100 || control.value < 1) {
    return {numberLimits: 'Limits must be bettwen 1 - 100'}
  }
  return null

}
