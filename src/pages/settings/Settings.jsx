import Title from "@/components/title/Title";
import SettingLanguage from "./SettingLanguage";
import { useTranslation } from "@/hooks";

const Settings = () => {
  const t = useTranslation();
  return (
    <div className="bg-bodyColor h-screen px-[14px] py-[41px]">
      <div>
        <Title>{t.settings}</Title>
        <SettingLanguage />
      </div>
    </div>
  );
};

export default Settings;
