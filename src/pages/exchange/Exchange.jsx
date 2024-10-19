import { exchangaHeaderData } from "@/data";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import BuyExchange from "./BuyExchange";
import SellExchange from "./SellExchange";

const Exchange = () => {
  return (
    <Tabs value={"buy"} className="pt-5">
      <TabsHeader
        className="bg-mainColor p-[6px] rounded-[7px] h-[48px]"
        indicatorProps={{
          className: "bg-[#2D343C]  rounded-[5px]",
        }}
      >
        {exchangaHeaderData.map((item) => (
          <Tab
            key={item}
            value={item}
            className={`font-poppins text-white text-sm font-medium capitalize`}
          >
            {item}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <TabPanel key={"buy"} value={"buy"} className="pt-[15px] px-0">
          <BuyExchange />
        </TabPanel>
        <TabPanel key={"sell"} value={"sell"} className="pt-[15px] px-0">
          <SellExchange />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
};

export default Exchange;
