import React from "react";
import {Image, ImageProps} from "@chakra-ui/react";
import One from "../asset/dice-1.svg";
import Two from "../asset/dice-2.svg";
import Three from "../asset/dice-3.svg";
import Four from "../asset/dice-4.svg";
import Five from "../asset/dice-5.svg";
import Six from "../asset/dice-6.svg";

interface Props extends ImageProps {
    value: number;
}

export const Dice = React.memo<Props>(({value, ...otherProps}) => {
    const diceMap = {
        1: One,
        2: Two,
        3: Three,
        4: Four,
        5: Five,
        6: Six,
    } as Record<number, string>;

    if (!diceMap[value]) {
        return null;
    }

    return <Image src={diceMap[value]} {...otherProps} />;
});
