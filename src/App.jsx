import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "@/layout/Layout";
const Home = lazy(() => import("@/pages/Home/Home"));
const Draw = lazy(() => import("@/pages/draw/Draw"));
const Friends = lazy(() => import("@/pages/friends/Friends"));
const Exchange = lazy(() => import("@/pages/exchange/Exchange"));
const Settings = lazy(() => import("@/pages/settings/Settings"));
const Mission = lazy(() => import("@/pages/mission/Mission"));

function App() {
  return (
    <Suspense fallback={""}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="draw" element={<Draw />} />
          <Route path="friends" element={<Friends />} />
          <Route path="mission" element={<Mission />} />
          <Route path="exchange" element={<Exchange />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* <Route path="/" element={<Navigate to="/main" replace />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
