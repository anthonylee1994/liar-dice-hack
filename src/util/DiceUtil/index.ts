import {CupOfDices, DiceType} from "./type.ts";

export const DiceUtil = {
    randomDice(): DiceType {
        return (Math.floor(Math.random() * 6) + 1) as DiceType;
    },
    randomCupOfDices(): CupOfDices {
        const dices: DiceType[] = [];
        for (let i = 0; i < 5; i++) {
            dices.push(this.randomDice());
        }
        return dices as CupOfDices;
    },
};
