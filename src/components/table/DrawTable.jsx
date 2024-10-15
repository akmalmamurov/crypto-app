import { CompletedIcon, FailedIcon, PendingIcon } from "@/assets/icons";
import { drawTableHeader, drawTableList } from "@/data";

const DrawTable = () => {
  return (
    <div className="font-poppins bg-mainColor rounded-[7px]">
      <table className="w-full table-auto">
        <thead className="border-b-[0.5px] border-[#666666] ">
          <tr>
            {drawTableHeader.map((item) => (
              <th
                key={item}
                className="py-3 px-3 text-left capitalize text-white font-medium text-sm"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {drawTableList.map((row, index) => (
            <tr key={index} >
              <td className="py-3 px-3 text-white text-sm">{row.time}</td>
              <td className="py-3 px-3 text-white text-sm">{row.amount} UZS</td>
              <td className="py-3 px-3 text-white text-sm">{row.type}</td>
              <td className="flex justify-center  py-3 text-white text-sm ml-auto">
                {row.status === "pending" && <PendingIcon/>}
                {row.status === "failed" && <FailedIcon/>}
                {row.status === "completed" && <CompletedIcon />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DrawTable;
