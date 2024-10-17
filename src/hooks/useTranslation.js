
import uz from "@/locales/uz.json";
import en from "@/locales/en.json";
import ru from "@/locales/ru.json";
import useSettingsStore from "@/context/settings";

const translations = {
  "O'zbek": uz,
  English: en,
  Russian: ru,
};

export const useTranslation = () => {
  const language = useSettingsStore((state) => state.language);
  const translation = translations[language] || translations["English"];

  return translation;
};
