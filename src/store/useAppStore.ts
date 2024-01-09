import {create} from "zustand";
import {ResultProbability} from "../util/GameUtil/type.ts";

interface UseAppStore {
    stats: ResultProbability[];
    setStats: (stats: ResultProbability[]) => void;
}

export const useAppStore = create<UseAppStore>(set => ({
    stats: [],
    setStats: (stats: ResultProbability[]) => set({stats}),
}));
