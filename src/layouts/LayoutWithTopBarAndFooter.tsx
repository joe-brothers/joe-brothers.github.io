import { Divider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { TopBar } from "../components/TopBar";

export const LayoutWithTopBarAndFooter = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Divider variant="middle" />
      <Footer />
    </>
  );
};
