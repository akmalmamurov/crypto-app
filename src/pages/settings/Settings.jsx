import Title from "@/components/title/Title";
import SettingLanguage from "./SettingLanguage";
import { useTranslation } from "@/hooks";
import { ArrowUpIcon } from "@/assets/icons";
import { Link } from "react-router-dom";
import SettingCurency from "./SettingCurency";
import { useState } from "react";

const Settings = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const t = useTranslation();
  return (
    <div className="bg-bodyColor h-screen px-[14px] py-[41px]">
      <Link to={"/"}>
        <ArrowUpIcon className="w-5 h-5 -rotate-90" />
      </Link>
      <div>
        <Title>{t.settings}</Title>
        <div className="flex flex-col gap-5">
          <SettingLanguage
            isOpen={languageOpen}
            setIsOpen={setLanguageOpen}
            currencyOpen={currencyOpen}
          />
          <SettingCurency
            languageOpen={languageOpen}
            isOpen={currencyOpen}
            setIsOpen={setCurrencyOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
