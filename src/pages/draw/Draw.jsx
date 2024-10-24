import { useState } from "react";
import { drawTabsHeader } from "@/data";
import DrawCard from "./draw-card/DrawCard";
import DrawWallet from "./DrawWallet";

const Draw = () => {
  const [activeTab, setActiveTab] = useState("card");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const activeTabIndex = drawTabsHeader.indexOf(activeTab);

  return (
    <div className="pt-5">
      <div className="relative bg-mainColor p-[6px] rounded-[7px] h-[48px] flex">
        <div
          className="absolute top-[6px] left-[5px] h-[36px] bg-salute rounded-[5px] transition-transform duration-300 ease-in-out"
          style={{
            width: `${100 / drawTabsHeader.length}%`,
            transform: `translateX(${activeTabIndex * 94}%)`,
          }}
        ></div>

        {drawTabsHeader.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(item)}
            className={`relative z-10 text-white font-poppins text-sm font-medium capitalize rounded-[5px] pl-[5px] pr-[5px] py-2 w-full transition-colors duration-300
           
            `}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="pt-[15px] px-0 transition-all duration-500 ease-in-out">
        {activeTab === "card" && <DrawCard />}
        {activeTab === "wallet" && <DrawWallet />}
      </div>
    </div>
  );
};

export default Draw;
