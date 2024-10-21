import { friendsTableHeader } from "@/data";

const FriendsTable = () => {
  return (
    <table className="w-full table-auto">
      <thead className="border-b-[0.5px] border-[#666666]">
        <tr>
          {friendsTableHeader.map((item) => (
            <th
              key={item}
              className="py-3 px-5 text-left capitalize text-silver font-medium text-base"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-3 px-4 text-white ">Boburmirzo</td>
          <td className="py-3 px-4 text-white ">100 UZS</td>
        </tr>
        <tr>
          <td className="py-3 px-4 text-white ">Boburmirzo</td>
          <td className="py-3 px-4 text-white ">300 UZS</td>
        </tr>
      </tbody>
    </table>
  );
};

export default FriendsTable;
