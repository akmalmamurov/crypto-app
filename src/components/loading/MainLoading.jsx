import { loading } from "@/assets/images";

const MainLoading = ({ progress }) => {
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-[#111827]">
      <div className="flex justify-center items-center h-full">
        <img src={loading} alt="logo" className="w-[100px] h-[92px]" />
      </div>

      <div className="w-full h-1">
        <div
          className="bg-[#4092FF] h-full w-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MainLoading;
