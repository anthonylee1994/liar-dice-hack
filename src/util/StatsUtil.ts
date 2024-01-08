import {CupOfDices, DiceType} from "./DiceUtil/type.ts";
import {DiceCall, DiceCallWithProbability} from "./GameUtil/type.ts";
import {GameUtil} from "./GameUtil";

export const StatsUtil = {
    winningProbability(playerCount: number, myCupOfDices: CupOfDices, diceCall: DiceCall): number {
        const stats = {
            win: 0,
            lose: 0,
        };

        for (let i = 0; i < 1_000; i++) {
            if (GameUtil.simulateGameResult(playerCount, myCupOfDices, diceCall)) {
                stats.win++;
            } else {
                stats.lose++;
            }
        }

        return stats.win / (stats.win + stats.lose);
    },
    stats(playerCount: number, myCupOfDices: CupOfDices): DiceCallWithProbability[] {
        const table: DiceCallWithProbability[] = [];

        for (let i = playerCount; i <= playerCount * 5; i++) {
            for (let j = 1; j <= 6; j++) {
                for (let k = 0; k < 2; k++) {
                    table.push({
                        totalOfSame: i,
                        diceType: j as DiceType,
                        pure: k === 0,
                        probability: this.winningProbability(playerCount, myCupOfDices, {totalOfSame: i, diceType: j as DiceType, pure: k === 0}),
                    });
                }
            }
        }

        return table;
    },
};
