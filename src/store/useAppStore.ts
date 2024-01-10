import {create} from "zustand";
import {ResultProbability} from "../util/type.ts";

interface UseAppStore {
    stats: ResultProbability[];
    setStats: (stats: ResultProbability[]) => void;
}

export const useAppStore = create<UseAppStore>(set => ({
    stats: [],
    setStats: stats => set({stats}),
}));
