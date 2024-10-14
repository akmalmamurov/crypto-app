import { useState } from "react";
import { Button } from "@material-tailwind/react";

import { priceFormat } from "@/utils";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DollarIcon,
  SettingIcon,
} from "@/assets/icons";
import SettingModal from "@/components/modal/SettingModal";
import { useNavigate } from "react-router-dom";

const HomeTop = () => {
  const navigate = useNavigate();
  const goSetting = () => {
    navigate("/settings");
  };
  return (
    <section className="pt-[10px]">
      <div className="bg-mainColor pb-[20px] pt-[13px] px-4 rounded-[6px] mb-[9px]">
        <div className="flex justify-between mb-[23px]">
          {/* logo */}
          <h1 className="text-white text-xl">Logo</h1>
          {/* icon */}
          <button onClick={goSetting}>
            <SettingIcon />
          </button>
        </div>
        <div className="flex flex-col items-center mb-[22px]">
          <h4 className="text-center text-base text-silver leading-6">
            Balance
          </h4>
          <h2 className="text-[32px] font-medium text-white">
            {priceFormat(49888.37)} <span className="text-silver">UZS</span>
          </h2>
        </div>
        {/* buttons */}
        <div className="grid grid-cols-3 gap-[9px]">
          <Button
            className="bg-salute font-medium rounded-[5px] text-xs
         font-poppins capitalize flex gap-[2.5px] items-center justify-center h-[34px]"
          >
            <span>
              <ArrowUpIcon />
            </span>
            Sell
          </Button>
          <Button
            className="bg-salute font-medium rounded-[5px] text-xs 
        font-poppins capitalize flex gap-[2.5px] items-center h-[34px] justify-center"
          >
            <span>
              <ArrowDownIcon />
            </span>
            Buy
          </Button>
          <Button
            className="bg-salute font-medium rounded-[5px] text-xs 
        font-poppins capitalize flex gap-[2.5px] h-[34px] items-center justify-center"
          >
            <span>
              <DollarIcon />
            </span>
            Withdraw
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeTop;
