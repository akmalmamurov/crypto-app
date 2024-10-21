const BlueButton = ({ children, className }) => {
  return (
    <button
      className={`${className} font-poppins w-full rounded-[15px] bg-lavenderBlue h-[52px] font-medium text-white`}
    >
      {children}
    </button>
  );
};

export default BlueButton;
