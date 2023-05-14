import { UserModel } from "@/models";
import { create } from "zustand";

type State = {
  users: UserModel[];
  setUser: (value: any) => void;
};

const initialState = {
  users: [],
};

export const useStore = create<State>((set) => ({
  ...initialState,
  setUser: (value) => set((state) => ({ ...state, users: value })),
}));
