import {CupOfDices, DiceType} from "./DiceUtil/type.ts";
import {DiceCall, ResultProbability} from "./GameUtil/type.ts";
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
    stats(playerCount: number, myCupOfDices: CupOfDices): ResultProbability[] {
        const table: ResultProbability[] = [];

        for (let totalOfSame = playerCount; totalOfSame <= playerCount * 5; totalOfSame++) {
            for (let diceType = 1; diceType <= 6; diceType++) {
                table.push({
                    totalOfSame,
                    diceType: diceType as DiceType,
                    nonZhaiProbability:
                        totalOfSame - (playerCount > 2 ? 1 : 0) <= playerCount || diceType === 1
                            ? null
                            : this.winningProbability(playerCount, myCupOfDices, {totalOfSame: totalOfSame, diceType: diceType as DiceType, pure: false}),
                    zhaiProbability:
                        totalOfSame <= playerCount && diceType !== 1 && playerCount > 2
                            ? null
                            : this.winningProbability(playerCount, myCupOfDices, {totalOfSame: totalOfSame, diceType: diceType as DiceType, pure: true}),
                });
            }
        }

        return table.filter(result => Math.round((result.zhaiProbability || 0) * 100) !== 0 || Math.round((result.nonZhaiProbability || 0) * 100) !== 0);
    },
};
