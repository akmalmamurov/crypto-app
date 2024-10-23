import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";

const CustomTabs = ({ headerData, defaultValue, panels }) => {
  return (
    <Tabs value={defaultValue} className="pt-5">
      <TabsHeader
        className="bg-mainColor p-[6px] rounded-[7px] h-[48px]"
        indicatorProps={{
          className: "bg-[#2D343C]  rounded-[5px]",
        }}
      >
        {headerData.map((item) => (
          <Tab
            key={item}
            value={item}
            className="font-poppins text-white text-sm font-medium capitalize"
          >
            {item}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {panels.map(({ key, value, component }) => (
          <TabPanel key={key} value={value} className="pt-[15px] px-0">
            {component}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default CustomTabs;
