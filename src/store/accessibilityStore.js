// src/store/accessibilityStore.js
import { create } from "zustand";

export const useAccessibilityStore = create((set) => ({
  fontSize: 100,

  setFontSize: (size) => set({ fontSize: size }),
  increaseFont: () =>
    set((state) => ({
      fontSize: Math.min(state.fontSize + 10, 150),
    })),
  decreaseFont: () =>
    set((state) => ({
      fontSize: Math.max(state.fontSize - 10, 70),
    })),

  resetAccessibility: () =>
    set({
      fontSize: 100,
    }),
}));
