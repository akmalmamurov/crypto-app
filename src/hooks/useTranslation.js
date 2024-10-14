
import uz from "@/locales/uz.json";
import en from "@/locales/en.json";
import ru from "@/locales/ru.json";
import useLanguageStore from "@/context/language";

const translations = {
  "O'zbek": uz,
  English: en,
  Russian: ru,
};

export const useTranslation = () => {
  const language = useLanguageStore((state) => state.language);
  const translation = translations[language] || translations["English"];

  return translation;
};
