import React from "react";
import {Flex, FormControl, FormErrorMessage, FormLabel, HStack, IconButton, PinInput, PinInputField} from "@chakra-ui/react";
import {Field, FieldProps} from "formik";
import {DeleteIcon, RepeatIcon} from "@chakra-ui/icons";
import {DiceUtil} from "../../util/DiceUtil";

export const MyCupOfDicesInput = React.memo(() => {
    return (
        <Field name="myDices">
            {({field, meta, form}: FieldProps) => (
                <Flex alignItems="flex-end">
                    <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
                        <FormLabel>我的骰子</FormLabel>
                        <HStack w="full">
                            <PinInput isInvalid={Boolean(meta.touched && meta.error)} otp placeholder="🎲" size="lg" value={field.value} onChange={value => form.setFieldValue(field.name, value)}>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                            <IconButton
                                size="lg"
                                colorScheme="red"
                                aria-label="random"
                                icon={field.value.length === 0 ? <RepeatIcon /> : <DeleteIcon />}
                                onClick={() => {
                                    if (field.value.length === 0) {
                                        form.setFieldValue(field.name, DiceUtil.randomCupOfDices().join(""));
                                        return;
                                    }

                                    form.setFieldValue(field.name, "");
                                }}
                            />
                        </HStack>
                        {Boolean(meta.touched && meta.error) && <FormErrorMessage>{meta.error}</FormErrorMessage>}
                    </FormControl>
                </Flex>
            )}
        </Field>
    );
});
