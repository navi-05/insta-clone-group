import { create } from "zustand";

export const useModal = create((set) => ({
  open: false,
  setOpen: (value) => set((state) => ({ open: value || !state.open }))
}))