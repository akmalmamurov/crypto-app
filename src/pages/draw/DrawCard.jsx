import { CardRedIcon, DrawCardIcon, LogoIcon } from "@/assets/icons";
import WithDrawCard from "@/components/card/WithDrawCard";
import DrawTable from "@/components/table/DrawTable";
import BaseTitle from "@/components/title/BaseTitle";
import useSettingsStore from "@/context/settings";
import { cardsData } from "@/data";
import { useForm } from "react-hook-form";
import { formatInputNumber } from "@/utils";
import { Button } from "@material-tailwind/react";


const DrawCard = () => {
  const MIN_AMOUNT = 20000;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();
  const { currency } = useSettingsStore();
  const cardValue = watch("card");

  const onSubmit = (data) => {
    const parsedData = {
      ...data,
      card: data.card.replace(/\s/g, ""),
      amount: parseInt(data.amount.replace(/\s/g, ""), 10),
    };

    if (parsedData.amount < MIN_AMOUNT) {
      return;
    }

    reset();

    console.log(parsedData);
  };

  const handleCardChange = (e) => {
    const rawValue = e.target.value.replace(/\s/g, "");
    if (rawValue.length <= 16) {
      const formattedValue = formatInputNumber(e.target.value);
      setValue("card", formattedValue, { shouldValidate: true });
    }
  };

  const handleSelectCard = (cardNumber) => {
    const formattedCard = formatInputNumber(cardNumber);
    setValue("card", formattedCard, { shouldValidate: true });
  };

  const formatCurrencyInput = (value) => {
    const numericValue = value.replace(/\D/g, "");
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    const formattedValue = formatCurrencyInput(value);
    setValue("amount", formattedValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[15px]">
        <BaseTitle>Receiver card</BaseTitle>
        <div className="bg-mainColor p-3 rounded-[7px] flex items-center font-poppins relative">
          <label htmlFor="card">
            {cardValue && cardValue.startsWith("9860") ? (
              <DrawCardIcon />
            ) : cardValue && cardValue.startsWith("8600") ? (
              "Uz Card"
            ) : (
              <DrawCardIcon />
            )}
          </label>
          <input
            id="card"
            type="text"
            autoComplete="off"
            placeholder="0000 0000 0000 0000"
            className="pl-3 bg-transparent focus:outline-none placeholder:text-silver font-normal text-sm text-white "
            {...register("card", {
              required: "Card number is required",
              pattern: {
                value: /^\d{4} \d{4} \d{4} \d{4}$/,
                message: "Card number must be 16 digits",
              },
              onChange: handleCardChange,
            })}
            maxLength={19}
          />
          {cardValue?.length > 0 && (
            <span
              className="font-bold text-silver cursor-pointer absolute right-[24%] top-[25%]"
              onClick={() => reset()}
            >
              X
            </span>
          )}
        </div>
      </div>

      {cardValue ? (
        <div className="mt-[10px]">
          {/* amount */}
          <div className="bg-mainColor rounded-[7px] pt-[10px] pl-5 pr-[10px] pb-[14px] mb-[25px] font-poppins">
            <div className="flex justify-between items-center mb-5">
              <h4 className="min-w-min text-sm text-silver">Enter summa</h4>
              <p className="text-[10px] font-normal text-bullRed">
                Minimum summa: <span>20 000 {currency}</span>
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className=" relative w-1/3">
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
                <span className="absolute top-0 right-[0] ">
                  <p>{currency}</p>
                </span>
              </div>
              <span>
                <CardRedIcon />
              </span>
            </div>
          </div>

          {/* info card */}
          <div className="">
            <BaseTitle>Your balance</BaseTitle>
            <div className="bg-mainColor rounded-[7px] pt-[10px] pl-5 pr-[10px] pb-[14px] mb-[18px] font-poppins">
              <div className="flex justify-between mb-4">
                <h4 className="font-medium text-white text-base">
                  Crypto Market
                </h4>
                <LogoIcon />
              </div>
              <p>
                100 000 <span>{currency}</span>
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
            <div className="flex gap-3 overflow-x-auto scrollbar-none">
              {cardsData.map((item, index) => (
                <WithDrawCard
                  key={index}
                  card={item}
                  onSelectCard={handleSelectCard}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="mt-[15px]">
        <BaseTitle>Transaction history</BaseTitle>
        <DrawTable />
      </div>
    </form>
  );
};

export default DrawCard;
