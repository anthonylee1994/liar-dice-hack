import {CupOfDices, DiceType} from "./DiceUtil/type.ts";
import {DiceCall, ResultProbability} from "./GameUtil/type.ts";
import {GameUtil} from "./GameUtil";

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
    stats(playerCount: number, myCupOfDices: CupOfDices): ResultProbability[] {
        const table: ResultProbability[] = [];

        for (let totalOfSame = playerCount; totalOfSame <= playerCount * 5; totalOfSame++) {
            for (let diceType = 1; diceType <= 6; diceType++) {
                const diceTypeValue = diceType as DiceType;

                const nonZhaiProbability =
                    totalOfSame - (playerCount > 2 ? 1 : 0) <= playerCount || diceType === 1
                        ? null
                        : this.winningProbability(playerCount, myCupOfDices, {
                              totalOfSame,
                              diceType: diceTypeValue,
                              pure: false,
                          });

                const zhaiProbability =
                    totalOfSame <= playerCount && diceTypeValue !== 1 && playerCount > 2
                        ? null
                        : this.winningProbability(playerCount, myCupOfDices, {
                              totalOfSame,
                              diceType: diceTypeValue,
                              pure: true,
                          });

                table.push({
                    totalOfSame,
                    diceType: diceTypeValue,
                    nonZhaiProbability,
                    zhaiProbability,
                });
            }
        }

        return table;
    },
};
