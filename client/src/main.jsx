import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import ScheduleSession from "./pages/ScheduleSession.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Header from "./components/Header.jsx";

import Footer from "./components/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";

import ResourceLibrary from "./pages/ResourcesLibrary.jsx";
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
        <Route path="*" element={<NotFound />} />
        
        <Route path="resources-library-page" element={<ResourceLibrary />} />

        /**rout path is manual called 'coping tools page'  */
        <Route path="coping-tools" element={<CoopingTools />} />

        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />

    </>
  )
}