import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useSettingsStore = create(
  persist(
    (set) => ({
      currency: "USD",
      language: "O'zbek",
      theme: "Light",
      setCurrency: (newCurrency) => set({ currency: newCurrency }),
      setLanguage: (newLanguage) => set({ language: newLanguage }),
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "telegram-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useSettingsStore;
