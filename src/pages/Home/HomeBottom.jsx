import { TonIcon, UsdIcon } from "@/assets/icons";
import useSettingsStore from "@/context/settings";
import { mainHeader } from "@/data";

const HomeBottom = () => {
  const {currency} = useSettingsStore();
  return (
    <div className="bg-mainColor rounded-[6px] pt-[12px] pb-[27px] px-[3px]">
      <table className="w-full table-auto">
        <thead className="border-b-[0.5px] border-[#666666] ">
          <tr>
            {mainHeader.map((item) => (
              <th
                key={item}
                className="py-3 px-3 text-left capitalize text-white font-medium text-base"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr >
            <td className="py-3 px-2">
              <div className="flex items-center gap-2">
                <TonIcon />
                <p className="font-semibold text-white text-base">Toncoin</p>
              </div>
            </td>
            <td className="py-3 px-2">
              <p className="font-normal text-white text-sm"> 60.000 <span className="text-silver">{currency}</span></p>
            </td>
            <td className="py-3 px-2">
              <p className="font-normal text-white text-sm"> 60.000 <span className="text-silver">{currency}</span></p>
            </td>
          </tr>
          <tr >
            <td className="py-3 px-2">
              <div className="flex items-center gap-2">
                <UsdIcon />
                <p className="font-semibold text-white text-base">Toncoin</p>
              </div>
            </td>
            <td className="py-3 px-2">
              <p className="font-normal text-white text-sm"> 60.000 <span className="text-silver">{currency}</span></p>
            </td>
            <td className="py-3 px-2">
              <p className="font-normal text-white text-sm"> 60.000 <span className="text-silver">{currency}</span></p>
            </td>
          </tr>
          <tr >
            <td className="py-3 px-2">
              <div className="flex items-center gap-2">
                <UsdIcon />
                <p className="font-semibold text-white text-base">Toncoin</p>
              </div>
            </td>
            <td className="py-3 px-2">
              <p className="font-normal text-white text-sm"> 60.000 <span className="text-silver">{currency}</span></p>
            </td>
            <td className="py-3 px-2">
              <p className="font-normal text-white text-sm"> 60.000 <span className="text-silver">{currency}</span></p>
            </td>
          </tr>
          <tr >
            <td className="py-3 px-2">
              <div className="flex items-center gap-2">
                <UsdIcon />
                <p className="font-semibold text-white text-base">Toncoin</p>
              </div>
            </td>
            <td className="py-3 px-2">
              <p className="font-normal text-white text-sm"> 60.000 <span className="text-silver">{currency}</span></p>
            </td>
            <td className="py-3 px-2">
              <p className="font-normal text-white text-sm"> 60.000 <span className="text-silver">{currency}</span></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomeBottom;
