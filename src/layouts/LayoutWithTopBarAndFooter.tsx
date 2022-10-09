import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { TopBar } from "../components/TopBar";

export const LayoutWithTopBarAndFooter = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
};
