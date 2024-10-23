import WithDrawCard from "@/components/card/WithDrawCard";
import BaseTitle from "@/components/title/BaseTitle";
import { cardsData } from "@/data";

const Receivers = ({ handleSelectCard }) => {
  return (
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
  );
};

export default Receivers;
