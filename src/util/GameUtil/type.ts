import {DiceType} from "../DiceUtil/type.ts";

export interface DiceCall {
    totalOfSame: number;
    diceType: DiceType;
    pure: boolean;
}

export interface ResultProbability {
    totalOfSame: number;
    diceType: DiceType;
    zhaiProbability: number | null;
    nonZhaiProbability: number | null;
}
