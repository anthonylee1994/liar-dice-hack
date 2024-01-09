import React from "react";
import {Flex, FormControl, FormErrorMessage, FormLabel, HStack, IconButton, PinInput, PinInputField} from "@chakra-ui/react";
import {Field, FieldProps} from "formik";
import {DeleteIcon, RepeatIcon} from "@chakra-ui/icons";
import {DiceUtil} from "../../util/DiceUtil";
import {useAppStore} from "../../store/useAppStore.ts";

export const MyCupOfDicesInput = React.memo(() => {
    const setStats = useAppStore(state => state.setStats);

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
                                        setStats([]);
                                    }}
                                />

                                <IconButton
                                    isDisabled={field.value === ""}
                                    colorScheme="red"
                                    aria-label="random"
                                    icon={<DeleteIcon />}
                                    onClick={() => {
                                        form.setFieldValue(field.name, "");
                                        setStats([]);
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
