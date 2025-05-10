import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HeaderAndFooter() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
