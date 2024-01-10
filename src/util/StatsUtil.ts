import {GameUtil} from "./GameUtil.ts";
import {CupOfDices, DiceCall, DiceType, ResultProbability} from "./type.ts";

export const StatsUtil = {
    winningProbability(playerCount: number, myCupOfDices: CupOfDices, diceCall: DiceCall): number {
        let win = 0;
        let lose = 0;

        for (let i = 0; i < 1_000; i++) {
            if (GameUtil.simulateGameResult(playerCount, myCupOfDices, diceCall)) {
                win++;
            } else {
                lose++;
            }
        }

        return win / (win + lose);
    },
    hideProbability(playerCount: number, totalOfSame: number, diceType: DiceType, pure: boolean) {
        if (pure && totalOfSame <= playerCount && diceType !== 1 && playerCount > 2) {
            return true;
        } else if (!pure && (totalOfSame - (playerCount > 2 ? 1 : 0) <= playerCount || diceType === 1)) {
            return true;
        }
        return false;
    },
    stats(playerCount: number, myCupOfDices: CupOfDices) {
        const results: ResultProbability[] = [];

        for (let totalOfSame = playerCount; totalOfSame <= playerCount * 5; totalOfSame++) {
            for (let diceType = 1; diceType <= 6; diceType++) {
                const diceTypeValue = diceType as DiceType;

                const nonPureProbability = this.winningProbability(playerCount, myCupOfDices, {totalOfSame: totalOfSame, diceType: diceTypeValue, pure: false});
                const pureProbability = this.winningProbability(playerCount, myCupOfDices, {totalOfSame: totalOfSame, diceType: diceTypeValue, pure: true});

                results.push({
                    totalOfSame,
                    diceType: diceTypeValue,
                    nonPureProbability: this.hideProbability(playerCount, totalOfSame, diceTypeValue, false) ? null : nonPureProbability,
                    pureProbability: this.hideProbability(playerCount, totalOfSame, diceTypeValue, true) ? null : pureProbability,
                });
            }
        }

        return results;
    },
};
