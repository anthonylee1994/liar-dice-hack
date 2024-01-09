import React from "react";
import {useFormikContext} from "formik";
import {PlayerCountInput} from "./PlayerCountInput.tsx";
import {MyCupOfDicesInput} from "./MyCupOfDicesInput.tsx";
import {Button} from "@chakra-ui/react";
import {DiceDisplay} from "../DiceDisplay.tsx";
import {FormValues} from "../../app.tsx";
import {useAppStore} from "../../store/useAppStore.ts";
export const FormContent = React.memo(() => {
    const formik = useFormikContext<FormValues>();
    const stats = useAppStore(state => state.stats);

    return (
        <form onSubmit={formik.handleSubmit}>
            <PlayerCountInput />
            <MyCupOfDicesInput />
            <DiceDisplay value={formik.values.myDices.split("").map(Number)} />
            <Button type="submit" isDisabled={stats.length > 0} colorScheme="red" w="full" mt={4} isLoading={formik.isSubmitting}>
                計算模擬概率
            </Button>
        </form>
    );
});
