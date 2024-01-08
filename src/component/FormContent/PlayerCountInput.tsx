import React from "react";
import {FormControl, FormErrorMessage, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper} from "@chakra-ui/react";
import {Field, FieldProps} from "formik";

export const PlayerCountInput = React.memo(() => {
    return (
        <Field name="playerCount">
            {({field, meta, form}: FieldProps) => (
                <FormControl mb={2} isInvalid={Boolean(meta.touched && meta.error)}>
                    <FormLabel>玩家人數</FormLabel>
                    <NumberInput defaultValue={2} min={2} max={20} value={field.value} onChange={value => form.setFieldValue(field.name, value)}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    {Boolean(meta.touched && meta.error) && <FormErrorMessage>{meta.error}</FormErrorMessage>}
                </FormControl>
            )}
        </Field>
    );
});
