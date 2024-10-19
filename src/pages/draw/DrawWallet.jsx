import { CardRedIcon, ChevronRightIcon, LogoIcon } from "@/assets/icons";
import DrawTable from "@/components/table/DrawTable";
import BaseTitle from "@/components/title/BaseTitle";
import useSettingsStore from "@/context/settings";
import { Button } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";

const DrawWallet = () => {
  const MIN_AMOUNT = 20000;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const addressValue = watch("address");
  const currency = useSettingsStore((state) => state.currency);
  const onSubmit = (data) => {
    const parsedData = {
      ...data,
      amount: parseInt(data.amount.replace(/\s/g, ""), 10),
    };

    if (parsedData.amount < MIN_AMOUNT) {
      return;
    }

    reset();

    console.log(parsedData);
  };
  const formatCurrencyInput = (value) => {
    const numericValue = value.replace(/\D/g, "");
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  const handleAmountChange = (e) => {
    const value = e.target.value;
    const formattedValue = formatCurrencyInput(value);
    e.target.value = formattedValue;
  };

  return (
    <div className="">
      <BaseTitle>Receiver</BaseTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-mainColor h-[50px] rounded-[7px] flex items-center mb-[15px]">
          <input
            autoComplete="off"
            type="text"
            className="bg-transparent focus:outline-none pl-5 w-full placeholder:text-silver text-white"
            placeholder="Address or name"
            {...register("address", { required: true })}
          />
        </div>

        {addressValue ? (
          <div>
            <div className="bg-mainColor rounded-[7px] pt-[10px] pl-5 pr-[10px] pb-[14px] mb-[15px] font-poppins">
              <div className="flex justify-between items-center mb-5">
                <h4 className="min-w-min text-sm text-silver">Enter summa</h4>
                <p className="text-[10px] font-normal text-bullRed">
                  Minimum summa: <span>20 000 {currency}</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="relative w-1/3">
                  <input
                    type="text"
                    autoComplete="off"
                    className="bg-transparent text-white focus:outline-none"
                    placeholder="0,00"
                    {...register("amount", {
                      required: "Amount is required",
                      onChange: handleAmountChange,
                    })}
                  />
                  <span className="absolute top-0 right-[0]">
                    <p>{currency}</p>
                  </span>
                </div>
                <span>
                  <CardRedIcon />
                </span>
              </div>
            </div>

            <div className="">
              <BaseTitle>Your balance</BaseTitle>
              <div className="bg-mainColor rounded-[7px] pt-[10px] pl-5 pr-[10px] pb-[14px] mb-[18px] font-poppins">
                <div className="flex justify-between mb-4">
                  <h4 className="font-medium text-white text-base">
                    Crypto Market
                  </h4>
                  <LogoIcon />
                </div>
                <p className="font-normal text-white text-base">
                  1.2<span className="ml-1">TON</span>
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
        ) : (
          <div>
            <div className="mb-[15px]">
              <BaseTitle>Recently receivers</BaseTitle>
              <div className="bg-mainColor rounded-[7px] ">
                <div className="flex justify-between items-center border-b-[0.5px] border-[#5F5F5F] px-3 py-[13px] ">
                  <p className="text-white">UQDS....fvzn</p>
                  <ChevronRightIcon/>
                </div>
                <div className="flex justify-between items-center px-3 py-[13px] ">
                  <p className="text-white">UQDS....fvzn</p>
                  <ChevronRightIcon/>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mt-[15px]">
          <BaseTitle>Transaction history</BaseTitle>
          <DrawTable />
        </div>
      </form>
    </div>
  );
};

export default DrawWallet;
