import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "@/layout/Layout";
import Home from "@/pages/Home/Home";
import Draw from "./pages/draw/Draw";
import Friends from "./pages/friends/Friends";
import Invites from "./pages/invites/Invites";
import Exchange from "./pages/exchange/Exchange";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/main" replace />} /> */}

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="draw" element={<Draw />} />
        <Route path="friends" element={<Friends />} />
        <Route path="invites" element={<Invites />} />
        <Route path="exchange" element={<Exchange />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
