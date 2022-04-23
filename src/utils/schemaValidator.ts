import {validate, ValidationError} from "class-validator";
import {ValidatorOptions} from "class-validator/types/validation/ValidatorOptions";

let defaultClassValidatorOptions = {
    forbidUnknownValues: true,
    whitelist: true,
    stopAtFirstError: true,
};

export const validateSchema = async (obj,validationClass, options? : Partial<ValidatorOptions>): Promise<ValidationError[]> => {
    let errors = await validate(obj, validationClass, {
        ...defaultClassValidatorOptions,
        ...options,
    });

    return errors;
}
