import { SwapIcon } from "@/assets/icons";
import { Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";

const ExchangeDetails = () => {
  const { type } = useParams();

  return (
    <div className="bg-bodyColor h-screen flex flex-col justify-between px-[14px] py-[26px]">
      <div className="flex-grow">
        <div className="bg-mainColor rounded-[7px] px-[15px] pt-[36px] pb-[14px] mb-5">
          <div className="flex justify-between items-center">
            <input
              type="text"
              className="bg-transparent text-white text-xl w-full px-4   outline-none"
              placeholder={`0 UZS`}
            />
            <button className="bg-[#4093FF4D] px-[10px] h-[43px] rounded-[50%] flex items-center justify-center">
              <SwapIcon />
            </button>
          </div>
          <p className="text-silver text-sm mt-2">
            {type === "usd" ? (
              <span> Price for 1 USDT = 13 000 UZS </span>
            ) : (
              <span>Price for 1 TON = 13 000 UZS</span>
            )}
          </p>
        </div>

        <div className="bg-mainColor rounded-[7px] px-[15px] py-[15px] text-white mb-5">
          <div className="flex justify-between mb-3">
            <p>Currency</p>
            <p>UZS</p>
          </div>
          <div className="flex justify-between mb-3">
            <p>Price for 1 USDT</p>
            <p>13 000 UZS</p>
          </div>
          <div className="flex justify-between mb-3">
            <p>Limits</p>
            <p>20 000 - 12 000</p>
          </div>
          <div className="flex justify-between">
            <p>Time to pay</p>
            <p>15 minutes</p>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0">
        <Button className="bg-lavenderBlue w-full text-base text-white capitalize font-poppins h-[52px] rounded-[14px] font-normal">
          Next
        </Button>
      </div>
    </div>
  );
};

export default ExchangeDetails;
