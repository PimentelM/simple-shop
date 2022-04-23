import {validateSync} from "class-validator";
import {ValidatorOptions} from "class-validator/types/validation/ValidatorOptions";

let defaultClassValidatorOptions = {
    forbidUnknownValues: true,
    whitelist: true,
    stopAtFirstError: true,
};

export const validateOrThrow = (obj, validationClass, options? : Partial<ValidatorOptions>): void => {
    let errors =  validateSync(obj, validationClass, {
        ...defaultClassValidatorOptions,
        ...options,
    });

    if(errors.length > 0) {
        throw new Error(errors.map(e => e.constraints).join(', '));
    }
}
