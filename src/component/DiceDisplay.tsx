import React from "react";
import {Flex} from "@chakra-ui/react";
import {Dice} from "./Dice.tsx";

interface Props {
    value: number[];
}

export const DiceDisplay = React.memo<Props>(({value}) => {
    if (value.length === 0 || value.every(v => v < 1 || v > 6)) {
        return null;
    }

    return (
        <Flex mt={4} bgColor="red.100" p={2} borderRadius={6} justifyContent="center" alignItems="center">
            {value.map((v, i) => (
                <Dice mx={2} height={8} value={v} key={i} />
            ))}
        </Flex>
    );
});
