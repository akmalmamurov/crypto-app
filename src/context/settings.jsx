import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useSettingsStore = create(
  persist(
    (set) => ({
      currency: "USD",
      language: "O'zbek",
      setCurrency: (newCurrency) => set({ currency: newCurrency }),
      setLanguage: (newLanguage) => set({ language: newLanguage }),
    }),
    {
      name: "telegram-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useSettingsStore;
