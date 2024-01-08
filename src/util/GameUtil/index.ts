import {CupOfDices, DiceType} from "../DiceUtil/type.ts";
import {DiceCall} from "./type.ts";
import {DiceUtil} from "../DiceUtil";

export const GameUtil = {
    isDiceCountable(dice: DiceType, diceCall: DiceCall): boolean {
        if (diceCall.pure) {
            return dice === diceCall.diceType;
        }
        return dice === diceCall.diceType || dice === 1;
    },
    simulateGameResult(playerCount: number, myCupOfDices: CupOfDices, diceCall: DiceCall): boolean {
        const otherPlayersDices: CupOfDices[] = [];

        for (let i = 0; i < playerCount - 1; i++) {
            otherPlayersDices.push(DiceUtil.randomCupOfDices());
        }

        const myTotalOfSame = myCupOfDices.filter(dice => this.isDiceCountable(dice, diceCall)).length;
        const otherPlayersTotalOfSame = otherPlayersDices.map(dices => dices.filter(dice => this.isDiceCountable(dice, diceCall)).length);
        const totalOfSame = myTotalOfSame + otherPlayersTotalOfSame.reduce((acc, cur) => acc + cur, 0);

        return totalOfSame >= diceCall.totalOfSame;
    },
};
