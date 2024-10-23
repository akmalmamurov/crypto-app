import { exchangaHeaderData } from "@/data";
import BuyExchange from "./BuyExchange";
import SellExchange from "./SellExchange";
import CustomTabs from "@/components/tabs/CustomTabs";

const Exchange = () => {
  const panels = [
    { key: "buy", value: "buy", component: <BuyExchange /> },
    { key: "sell", value: "sell", component: <SellExchange /> },
  ];

  return <CustomTabs headerData={exchangaHeaderData} defaultValue="buy" panels={panels} />;
};

export default Exchange;
