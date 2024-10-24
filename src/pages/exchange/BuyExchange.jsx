import { ChevronRightIcon, TonIcon, UsdIcon } from "@/assets/icons";
import useSettingsStore from "@/context/settings";
import { priceUz } from "@/utils";
import { useNavigate } from "react-router-dom";

const BuyExchange = () => {
  const { currency } = useSettingsStore();
  const navigate = useNavigate();

  const goBuy = (type) => {
    navigate(`/exchange/${type}`);
  };
  return (
    <div>
      <div
        className="bg-mainColor rounded-[7px] py-[13px] px-4 mb-[15px] font-poppins"
        onClick={() => goBuy("usd")}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-[9px] items-center">
            <UsdIcon className="w-[35px] h-[35px]" />
            <div className="">
              <p className="font-medium text-white">1 USDT</p>
              <p className="font-normal text-sm text-white">
                {priceUz(12000)} <span className="text-silver">UZS</span>
              </p>
            </div>
          </div>
          <ChevronRightIcon />
        </div>
      </div>
      <div
        onClick={() => goBuy("ton")}
        className="bg-mainColor rounded-[7px] py-[13px] px-4 mb-[15px] font-poppins"
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-[9px] items-center">
            <TonIcon className="w-[35px] h-[35px]" />
            <div className="">
              <p className="font-medium text-white">1 TON</p>
              <p className="font-normal text-sm text-white">
                {priceUz(60000)} <span className="text-silver">UZS</span>
              </p>
            </div>
          </div>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default BuyExchange;
