import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "@/layout/Layout";
import Home from "@/pages/Home/Home";
import Draw from "@/pages/draw/Draw";
import Friends from "@/pages/friends/Friends";
import Mission from "@/pages/mission/Mission";
import Exchange from "@/pages/exchange/Exchange";
import Settings from "@/pages/settings/Settings";
import ExchangeDetails from "@/pages/exchange/ExchangeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="draw" element={<Draw />} />
        <Route path="friends" element={<Friends />} />
        <Route path="mission" element={<Mission />} />
        <Route path="exchange" element={<Exchange />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/exchange/:type" element={<ExchangeDetails />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
