import { drawTabsHeader } from "@/data";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import ShowDraw from "./draw-card/ShowDraw";
import { formatInputNumber } from "@/utils";
import { useForm } from "react-hook-form";
import BaseTitle from "@/components/title/BaseTitle";
import DrawTable from "@/components/table/DrawTable";
import Receivers from "./draw-card/Receivers";
import { DrawCardIcon } from "@/assets/icons";
import DrawWallet from "./DrawWallet";

const Draw = () => {
  const MIN_AMOUNT = 20000;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();
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
  return (
    <Tabs value={"card"} className="pt-5">
      <TabsHeader
        className="bg-mainColor p-[6px] rounded-[7px] h-[48px]"
        indicatorProps={{
          className: "bg-[#2D343C]  rounded-[5px]",
        }}
      >
        {drawTabsHeader.map((item) => (
          <Tab
            key={item}
            value={item}
            className="font-poppins text-white text-sm font-medium capitalize"
          >
            {item}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <TabPanel value={"card"} className="pt-[15px] px-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[15px]">
              <BaseTitle>Receiver card</BaseTitle>
              <div className="bg-mainColor p-3 rounded-[7px] flex items-center font-poppins relative">
                <label htmlFor="card" className="text-white">
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
                    className="font-bold text-silver cursor-pointer absolute right-[4%] top-[25%]"
                    onClick={() => reset()}
                  >
                    X
                  </span>
                )}
              </div>
            </div>

            {cardValue ? (
              <ShowDraw
                register={register}
                setValue={setValue}
                errors={errors}
                watch={watch}
              />
            ) : (
              <Receivers handleSelectCard={handleSelectCard} />
            )}
            <div className="mt-[15px]">
              <BaseTitle>Transaction history</BaseTitle>
              <DrawTable />
            </div>
          </form>
        </TabPanel>
        <TabPanel value={"wallet"} className="pt-[15px] px-0">
          <DrawWallet />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
};

export default Draw;
