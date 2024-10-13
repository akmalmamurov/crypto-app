import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const tg = window?.Telegram?.WebApp || null;

const useTelegramStore = create(
  persist(
    (set) => ({
      tg,
      user: null,
      setUser: (userData) => set({ user: userData }),

      isMainButtonVisible: false,
      setMainButtonVisible: (isVisible) =>
        set({ isMainButtonVisible: isVisible }),

      expandWebApp: () => {
        tg.expand();
      },
    }),
    {
      name: "telegram-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTelegramStore;
