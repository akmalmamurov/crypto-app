import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, ChevronRightIcon, SuccessIcon } from "@/assets/icons";
import { useTranslation } from "@/hooks";

const SettingCurency = ({ languageOpen,isOpen,setIsOpen }) => {
  const [curren, setCurren] = useState("USD");
  const currencies = ["USD", "RUB", "UZS"];
    const t = useTranslation();
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (currency) => {
    setIsOpen(false);
    setCurren(currency);
  };

  return (
    <div className={`${languageOpen ? "hidden" : "block"}`}>
      <div className="relative">
        <motion.div
          className={`${
            isOpen ? "hidden" : "flex"
          } h-[75px] bg-mainColor rounded-[7px] text-white px-[21px] items-center justify-between cursor-pointer`}
          onClick={toggleDropdown}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-medium text-base ">{t.mainCurrency}</p>
          <ChevronDownIcon
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 10, height: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute mt-2 w-full rounded-[7px] z-10 mb-4"
            >
              {currencies.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(item)}
                  className="h-[75px] px-[21px] flex items-center text-white cursor-pointer hover:bg-opacity-80 mb-3 bg-mainColor justify-between"
                >
                  <p className="font-medium text-base">{item}</p>
                  <div>
                    {curren === item ? <SuccessIcon /> : <ChevronRightIcon />}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SettingCurency;
