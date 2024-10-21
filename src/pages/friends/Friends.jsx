import { useState } from "react";
import BaseTitle from "@/components/title/BaseTitle";
import FriendsTable from "@/components/table/FriendsTable";
import BlueButton from "@/components/button/BlueButton";

const Friends = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const link = "  https://www.figma.com/design";
  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(
      () => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  return (
    <section className="pt-[26px]">
      {/* top */}
      <div className="bg-mainColor rounded-[7px] py-6 px-[18px] mb-[15px]">
        <p className="font-normal text-white text-sm leading-[26px] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      {/* link */}
      <div className="mb-[15px]">
        <BaseTitle>Your invite link</BaseTitle>
        <div className="bg-mainColor py-[13px] px-4 rounded-[9px] flex items-center justify-between gap-[24px]">
          <p className="font-poppins font-medium text-white text-sm break-all">
            {link}
          </p>
          <button
            className="px-3 h-[24px] bg-lavenderBlue flex items-center justify-center rounded-[6px] font-poppins font-medium text-xs capitalize text-white"
            onClick={handleCopy}
          >
            {copySuccess ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      {/* friends all info */}
      <div className="mb-[15px]">
        <BaseTitle>
          Your Invites <span className="text-silver">(2)</span>
        </BaseTitle>
        <div className="bg-mainColor rounded-[7px]">
          <FriendsTable />
        </div>
      </div>
      <BlueButton>
        Invite a friend
      </BlueButton>
    </section>
  );
};

export default Friends;
