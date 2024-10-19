import { drawTabsHeader } from "@/data";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import DrawCard from "./DrawCard";
import DrawWallet from "./DrawWallet";

const Draw = () => {
  return (
    <Tabs value={"card"} className="pt-5">
      <TabsHeader
        className="bg-mainColor p-[6px] rounded-[7px] h-[48px]"
        indicatorProps={{
          className: "bg-[#2D343C]  rounded-[5px]",
        }}
      >
        {drawTabsHeader.map((item) => (
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
        <TabPanel key={"card"} value={"card"} className="pt-[15px] px-0">
          <DrawCard />
        </TabPanel>
        <TabPanel key={"wallet"} value={"wallet"} className="pt-[15px] px-0">
          <DrawWallet />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
};

export default Draw;
