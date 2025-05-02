import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HeaderAndFooter from "./layouts/HeaderAndFooter.jsx";
import Landing from "./pages/Landing.jsx";
import ScheduleSession from "./pages/ScheduleSession.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Layout Routes with Header and Footer */}
          <Route element={<HeaderAndFooter />}>
            <Route index element={<Landing />} />
            <Route path="schedule-session" element={<ScheduleSession />} />
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
