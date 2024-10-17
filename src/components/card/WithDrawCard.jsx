import { DrawCardIcon } from "@/assets/icons";
import { formatCardNumber } from "@/utils";

const WithDrawCard = ({ card, onSelectCard }) => {
  const handleClick = () => {
    if (onSelectCard) {
      onSelectCard(card); 
    }
  };

  return (
    <div
      className="bg-mainColor rounded-[7px] p-3 flex flex-col gap-[11px] min-w-[143px] font-poppins cursor-pointer"
      onClick={handleClick}
    >
      <DrawCardIcon />
      <p className="font-normal text-xs text-white">{formatCardNumber(card)}</p>
    </div>
  );
};

export default WithDrawCard;
