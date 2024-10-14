import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLanguageStore = create(
  persist(
    (set) => ({
      language: "O'zbek",
      setLanguage: (newLanguage) => set({ language: newLanguage }),
    }),
    {
      name: "telegram-storage",
    }
  )
);

export default useLanguageStore;
