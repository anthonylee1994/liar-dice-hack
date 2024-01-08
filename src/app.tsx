import React from "react";
import {Box, Container} from "@chakra-ui/react";
import {TopBar} from "./component/TopBar.tsx";
import {Formik} from "formik";
import {StatsUtil} from "./util/StatsUtil.ts";
import {CupOfDices} from "./util/DiceUtil/type.ts";
import {DiceCallWithProbability} from "./util/GameUtil/type.ts";
import {FormContent} from "./component/FormContent";
import * as Yup from "yup";
import {ResultTable} from "./component/ResultTable.tsx";

interface FormValues {
    playerCount: number;
    myDices: string;
}

const validationSchema = Yup.object().shape({
    playerCount: Yup.number().required("必須填寫").min(2, "必須大於或等於2").max(20, "必須小於或等於20"),
    myDices: Yup.string()
        .required("必須填寫")
        .length(5, "必須填寫5個數字")
        .matches(/^[1-6]+$/, "只能填寫1~6"),
});

export const App = React.memo(() => {
    const [stats, setStats] = React.useState<DiceCallWithProbability[]>([]);

    return (
        <Box bgColor="red.50">
            <TopBar />
            <Container p={4} maxWidth="sm">
                <Formik<FormValues>
                    validationSchema={validationSchema}
                    initialValues={{
                        playerCount: 2,
                        myDices: "",
                    }}
                    onSubmit={(values, formikHelpers) => {
                        formikHelpers.setSubmitting(true);
                        setStats(StatsUtil.stats(values.playerCount, values.myDices.split("").map(v => parseInt(v, 10)) as CupOfDices));
                        formikHelpers.setSubmitting(false);
                    }}
                >
                    <FormContent />
                </Formik>
            </Container>
            <Container pt={{base: 1, sm: 2}} px={0} maxWidth="lg">
                <ResultTable stats={stats} />
            </Container>
        </Box>
    );
});
