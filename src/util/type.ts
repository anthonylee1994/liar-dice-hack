export type DiceType = 1 | 2 | 3 | 4 | 5 | 6;

export type CupOfDices = [DiceType, DiceType, DiceType, DiceType, DiceType];

export interface DiceCall {
    totalOfSame: number;
    diceType: DiceType;
    pure: boolean;
}

export interface ResultProbability {
    totalOfSame: number;
    diceType: DiceType;
    pureProbability: number | null;
    nonPureProbability: number | null;
}
