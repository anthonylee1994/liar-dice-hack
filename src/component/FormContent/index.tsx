import React from "react";
import {useFormikContext} from "formik";
import {PlayerCountInput} from "./PlayerCountInput.tsx";
import {MyCupOfDicesInput} from "./MyCupOfDicesInput.tsx";
import {Button} from "@chakra-ui/react";
export const FormContent = React.memo(() => {
    const formik = useFormikContext();

    return (
        <form onSubmit={formik.handleSubmit}>
            <PlayerCountInput />
            <MyCupOfDicesInput />
            <Button type="submit" colorScheme="red" w="full" mt={4} isLoading={formik.isSubmitting}>
                統計概率
            </Button>
        </form>
    );
});
