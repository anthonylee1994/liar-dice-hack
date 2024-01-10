import {create} from "zustand";
import {ResultProbability} from "../util/type.ts";

interface UseAppStore {
    stats: ResultProbability[];
    setStats: (stats: ResultProbability[]) => void;
    addStat: (stat: ResultProbability) => void;
    clearStats: () => void;
}

export const useAppStore = create<UseAppStore>(set => ({
    stats: [],
    setStats: stats => set({stats}),
    addStat: stat => set(state => ({stats: [...state.stats, stat]})),
    clearStats: () => set({stats: []}),
}));
