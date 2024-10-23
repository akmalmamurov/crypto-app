import { drawTabsHeader } from "@/data";
import DrawCard from "./draw-card/DrawCard";
import DrawWallet from "./DrawWallet";
import CustomTabs from "@/components/tabs/CustomTabs";

const Draw = () => {
  const panels = [
    { key: "card", value: "card", component: <DrawCard /> },
    { key: "wallet", value: "wallet", component: <DrawWallet /> },
  ];

  return <CustomTabs headerData={drawTabsHeader} defaultValue="card" panels={panels} />;
};

export default Draw;
