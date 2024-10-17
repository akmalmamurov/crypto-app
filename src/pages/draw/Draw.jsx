import { useState } from "react";
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
    <div className="pt-5">
      {/* draw top tab */}
      <div>
        <Tabs value={"Card"}>
          <TabsHeader
            className="bg-mainColor p-[6px] rounded-[7px] h-[48px]"
            indicatorProps={{
              className: "bg-salute rounded-[5px]",
            }}
          >
            {drawTabsHeader.map((item) => (
              <Tab
                key={item}
                value={item}
                className={`font-poppins text-white text-sm font-medium`}
              >
                {item}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <TabPanel key={"Card"} value={"Card"} className="pt-[15px] px-0">
              <DrawCard />
            </TabPanel>
            <TabPanel key={"Wallet"} value={"Wallet"} className="pt-[15px] px-0">
              <DrawWallet />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default Draw;
