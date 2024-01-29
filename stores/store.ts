import { create } from "zustand";

export interface StoreState {
  lightMode: boolean;
  changeMode: () => void;
}

export const useStore = create<StoreState>((set) => ({
  lightMode: true,
  changeMode: () => set((state) => ({ lightMode: !state.lightMode })),
}));
