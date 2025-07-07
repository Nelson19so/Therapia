import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderAndFooter from "./layouts/HeaderAndFooter.jsx";
import Landing from "./pages/Landing.jsx";
import ScheduleSession from "./pages/ScheduleSession.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Header from "./components/Header.jsx";

import Footer from "./components/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";

import ResourceLibrary from "./pages/ResourcesLibrary.jsx";
import OnlyHeader from "./layouts/OnlyHeader.jsx";
import CoopingTools from "./pages/CoopingTools.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);




export default function App() {
  return (
    <>
    <Header />
      <Routes>
        {/* Layout Routes with Header and Footer */}

        <Route index element={<Landing />} />
         <Route path="schedule-session" element={<ScheduleSession />} />
          {/* <Route path="*" element={<NotFound />} /> */}

        <Route element={<HeaderAndFooter />}>
          <Route index element={<Landing />} />
          <Route path="schedule-session" element={<ScheduleSession />} />
          <Route path="cooping-tools" element={<CoopingTools />} />
        </Route>
        <Route element={<OnlyHeader />} >
          <Route element={<Header />} />
          <Route path="resources-library-page" element={<ResourceLibrary />} />
        </Route>

        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
      
    </>
  )
}

