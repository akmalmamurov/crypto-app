import { CardRedIcon, LogoIcon } from "@/assets/icons";
import BaseTitle from "@/components/title/BaseTitle";
import useSettingsStore from "@/context/settings";
import { formatCurrencyInput } from "@/utils";
import { Button } from "@material-tailwind/react";

const ShowDraw = ({ register, setValue, errors, watch }) => {
  const { currency } = useSettingsStore();

  // Inputdagi qiymatni kuzatish
  const checkAmount = watch("amount");
  const handleIconClick = () => {
    setValue("amount", cryptoMarket);
  };

  const cryptoMarket = formatCurrencyInput(20000);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    const formattedValue = formatCurrencyInput(value);
    setValue("amount", formattedValue);
  };

  // 20,000 dan kam bo'lsa xatolik holatini aniqlash
  const showError = checkAmount && parseInt(checkAmount.replace(/\s/g, '')) < 20000;

  return (
    <div className="mt-[10px]">
      <div className="bg-mainColor rounded-[7px] pt-[10px] pl-5 pr-[10px] pb-[14px] mb-[25px] font-poppins">
        <div className="flex justify-between items-center mb-5">
          <h4 className="min-w-min text-sm text-silver">Enter summa</h4>
          {showError && (
            <p className="text-[10px] font-normal text-bullRed">
              Minimum summa: <span>20 000 {currency}</span>
            </p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="relative w-1/3">
            <input
              type="text"
              autoComplete="off"
              className="bg-transparent text-white focus:outline-none"
              placeholder="0,00"
              {...register("amount", {
                required: true,
                onChange: handleAmountChange,
              })}
            />
            <span className="absolute top-0 right-[0]">
              <p>{currency}</p>
            </span>
          </div>
          <span onClick={handleIconClick}>
            <CardRedIcon />
          </span>
        </div>
      </div>

      <div className="">
        <BaseTitle>Your balance</BaseTitle>
        <div className="bg-mainColor rounded-[7px] pt-[10px] pl-5 pr-[10px] pb-[14px] mb-[18px] font-poppins">
          <div className="flex justify-between mb-4">
            <h4 className="font-medium text-white text-base">Crypto Market</h4>
            <LogoIcon />
          </div>
          <p>
            {cryptoMarket}
            <span>{currency}</span>
          </p>
        </div>
      </div>
      <Button
        type="submit"
        className="bg-[#4092FF] text-white p-2 rounded-[15px] w-full h-[52px] capitalize text-base font-poppins font-medium"
      >
        Withdraw
      </Button>
    </div>
  );
};

export default ShowDraw;
