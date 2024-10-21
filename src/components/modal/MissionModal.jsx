import { StarIcon } from "@/assets/icons";
import { Button } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";

const MissionModal = ({ isOpen, handleOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  // Handle modal visibility based on isOpen
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300); // Delay for the close animation
    }
  }, [isOpen]);

  // Detect clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If modal is open and the click is outside the modalRef, close the modal
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleOpen(); // Trigger the close function
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleOpen]);

  return (
    <div
      className={`fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.2)] transition-opacity duration-300 ease-in-out font-poppins ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${isVisible ? "block" : "hidden"}`}
    >
      <div className="relative h-full w-full">
        <div
          ref={modalRef}
          className={`bg-mainColor rounded-tl-[30px] rounded-tr-[30px] pt-12 pb-[30px] h-[375px] w-full absolute bottom-0 px-[14px] transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex flex-col items-center">
            <span className="mb-[17px]">
              <StarIcon />
            </span>
            <h4 className="font-semibold text-white text-[20px] mb-[19px]">
              Join our Telegram channel
            </h4>
            <p className="text-white font-normal text-[20px]">
              +200 <span className="text-silver text-sm">UZS</span>
            </p>
            <div className="w-full mt-4">
              <Button
                onClick={handleOpen}
                className="mb-[15px] capitalize font-poppins w-full rounded-[15px] bg-lavenderBlue h-[52px] font-medium text-white text-base"
              >
                Check
              </Button>
              <Button className="font-poppins w-full capitalize rounded-[15px] bg-lavenderBlue h-[52px] font-medium text-white text-base">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionModal;
