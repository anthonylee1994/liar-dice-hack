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
                        <HStack w="full" justifyContent="space-between">
                            <PinInput isInvalid={Boolean(meta.touched && meta.error)} otp placeholder="🎲" size="md" value={field.value} onChange={value => form.setFieldValue(field.name, value)}>
                                <PinInputField bgColor="white" />
                                <PinInputField bgColor="white" />
                                <PinInputField bgColor="white" />
                                <PinInputField bgColor="white" />
                                <PinInputField bgColor="white" />
                            </PinInput>

                            <HStack>
                                <IconButton
                                    colorScheme="red"
                                    aria-label="random"
                                    icon={<RepeatIcon />}
                                    onClick={() => {
                                        form.setFieldValue(field.name, DiceUtil.randomCupOfDices().join(""));
                                    }}
                                />

                                <IconButton
                                    isDisabled={field.value === ""}
                                    colorScheme="red"
                                    aria-label="random"
                                    icon={<DeleteIcon />}
                                    onClick={() => {
                                        form.setFieldValue(field.name, "");
                                    }}
                                />
                            </HStack>
                        </HStack>
                        {Boolean(meta.touched && meta.error) && <FormErrorMessage>{meta.error}</FormErrorMessage>}
                    </FormControl>
                </Flex>
            )}
        </Field>
    );
});
