import { Routes, Route } from "react-router-dom";
import { LayoutWithTopBarAndFooter } from "./layouts/LayoutWithTopBarAndFooter";
import { Main, Cards, Error } from "./components/content";
import { ThemeProvider } from "@mui/material";
import { basicTheme } from "./themes";
import { gameData, utilityData } from "./data";
import "./App.css";

export const App = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Routes>
        <Route path="" element={<LayoutWithTopBarAndFooter />}>
          <Route index element={<Main />} />
          <Route
            path="games"
            element={<Cards pageTitle={"✨🎲 Here you can enjoy our games! 🎮🙌"} cardsData={gameData} />}
          />
          <Route path="utility" element={<Cards pageTitle={"💡🕰️ Utility 🧮📱"} cardsData={utilityData} />} />
          <Route path="*" element={<Error emoji={"😶‍🌫️"} message={"This path doesn't exist."} />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
