import { create } from "zustand";

export const useStore = create((set) => ({
  dataUsers: [],
  setDataUsers: (data) => set({ dataUsers: data }),
}));
export const questionStore = create((set) => ({
  dataQuestion: [],
  setQuestion: (data) => set({ dataQuestion: data }),
}));
