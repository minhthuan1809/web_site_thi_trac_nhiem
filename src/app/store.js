import { create } from "zustand";

export const useStore = create((set) => ({
  dataUsers: [],
  setDataUsers: (data) => set({ dataUsers: data }),
}));
