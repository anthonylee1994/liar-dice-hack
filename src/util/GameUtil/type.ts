import {DiceType} from "../DiceUtil/type.ts";

export interface DiceCall {
    totalOfSame: number;
    diceType: DiceType;
    pure: boolean;
}

export type DiceCallWithProbability = DiceCall & {probability: number};
