import { ChevronRightIcon, TonIcon } from "@/assets/icons";
import MissionModal from "@/components/modal/MissionModal";
import BaseTitle from "@/components/title/BaseTitle";
import useSettingsStore from "@/context/settings";
import { useState } from "react";

const Mission = () => {
  const { currency } = useSettingsStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen((prev) => !prev);

  return (
    <section className="pt-[41px] font-poppins">
      {/* title */}
      <div className="flex flex-col items-center mb-[15px]">
        <h3 className="font-bold text-[24px] text-white leading-[36px] mb-[10px]">
          Tasks
        </h3>
        <h4 className="font-medium text-[24px] text-white tracking-wider">
          Earn more money
        </h4>
      </div>

      {/* daily tasks */}
      <div className="mb-[15px]">
        <BaseTitle>Daily tasks</BaseTitle>
        <div className="bg-mainColor py-[13px] pl-[15px] pr-[23px] flex justify-between items-center rounded-[6px]">
          <div className="flex items-center gap-[9px]">
            <TonIcon className="w-[35px] h-[35px]" />
            <div className="text-white flex flex-col gap-[4px]">
              <h3 className="font-medium">Daily reward</h3>
              <p className="font-normal text-sm">
                +200 <span className="text-silver">{currency}</span>
              </p>
            </div>
          </div>
          <div className="">
            <button
              onClick={handleOpen} // Open the modal when clicked
              className="px-[15px] py-[6px] bg-lavenderBlue text-white font-medium text-sm rounded-[6px]"
            >
              Claim
            </button>
          </div>
        </div>
      </div>
      {/* extra tasks */}
      <div>
        <BaseTitle>Extra tasks</BaseTitle>
        <div className="bg-mainColor py-[13px] pl-[15px] pr-[23px] flex justify-between items-center rounded-[6px]">
          <div className="flex items-center gap-[9px]">
            <TonIcon className="w-[35px] h-[35px]" />
            <div className="text-white flex flex-col gap-[4px]">
              <h3 className="font-medium">Join our telegram channel</h3>
              <p className="font-normal text-sm">
                +200 <span className="text-silver">{currency}</span>
              </p>
            </div>
          </div>
          <div className="">
            <ChevronRightIcon />
          </div>
        </div>
      </div>

      <MissionModal isOpen={isModalOpen} handleOpen={handleOpen} />
    </section>
  );
};

export default Mission;
