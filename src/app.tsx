import React from "react";
import {Box, Container} from "@chakra-ui/react";
import {TopBar} from "./component/TopBar.tsx";
import {Formik} from "formik";
import {StatsUtil} from "./util/StatsUtil.ts";
import {FormContent} from "./component/FormContent";
import * as Yup from "yup";
import {ResultTable} from "./component/ResultTable.tsx";
import {useAppStore} from "./store/useAppStore.ts";
import {CupOfDices} from "./util/type.ts";

export interface FormValues {
    playerCount: number;
    myDices: string;
}

export const App = React.memo(() => {
    const stats = useAppStore(state => state.stats);
    const setStats = useAppStore(state => state.setStats);

    return (
        <Box bgColor="red.50" pb="env(safe-area-inset-bottom)">
            <TopBar />
            <Container p={4} maxWidth="sm">
                <Formik
                    validationSchema={Yup.object().shape({
                        playerCount: Yup.number().required("必須填寫").min(2, "必須大於或等於2").max(20, "必須小於或等於20"),
                        myDices: Yup.string()
                            .required("必須填寫")
                            .length(5, "必須填寫5個數字")
                            .matches(/^[1-6]+$/, "只能填寫1~6"),
                    })}
                    initialValues={{
                        playerCount: 2,
                        myDices: "",
                    }}
                    onSubmit={async (values, formikHelpers) => {
                        formikHelpers.setSubmitting(true);
                        setStats(StatsUtil.stats(Number(values.playerCount), values.myDices.split("").map(v => parseInt(v, 10)) as CupOfDices));

                        formikHelpers.setSubmitting(false);
                    }}
                >
                    <FormContent />
                </Formik>
            </Container>
            {stats.length > 0 && (
                <Container pt={{base: 1, sm: 2}} px={0} maxWidth="lg">
                    <ResultTable stats={stats} />
                </Container>
            )}
        </Box>
    );
});
