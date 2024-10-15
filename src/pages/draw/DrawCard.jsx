import { DrawCardIcon } from "@/assets/icons";
import WithDrawCard from "@/components/card/WithDrawCard";
import DrawTable from "@/components/table/DrawTable";
import BaseTitle from "@/components/title/BaseTitle";
import { cardsData } from "@/data";
import { useForm } from "react-hook-form";
import { useState } from "react";

const DrawCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Watching the card input value
  const cardValue = watch("card");

  // Form submit handler
  const onSubmit = (data) => {
    console.log(data);
    // Your submit logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* adding card */}
      <div className="mb-[15px]">
        <BaseTitle>Receiver card</BaseTitle>
        <div className="bg-mainColor p-3 rounded-[7px] flex items-center">
          <label htmlFor="card">
            <DrawCardIcon />
          </label>
          <input
            id="card"
            type="text"
            placeholder="9860 0000 0000 0000"
            className="pl-3 bg-transparent focus:outline-none text-silver font-normal text-sm"
            {...register("card", { required: true })}
          />
        </div>
      </div>

      {/* Conditionally render based on card input */}
      {cardValue ? (
        <div>
          <h1>Hello asdas</h1>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Withdraw
          </button>
        </div>
      ) : (
        <div>
          {/* card */}
          <div className="mb-[15px]">
            <BaseTitle>Recently receivers</BaseTitle>
            <div className="flex gap-3 overflow-x-auto scrollbar-none">
              {cardsData.map((item, index) => (
                <WithDrawCard key={index} card={item} />
              ))}
            </div>
          </div>
          {/* table */}
          <div>
            <BaseTitle>Transaction history</BaseTitle>
            <DrawTable />
          </div>
        </div>
      )}
    </form>
  );
};

export default DrawCard;
