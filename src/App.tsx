import { Routes, Route } from "react-router-dom";
import { LayoutWithTopBarAndFooter } from "./layouts/LayoutWithTopBarAndFooter";
import {
  MainContent,
  CardsContent,
  BlogContent,
  ErrorContent,
  PrivacyContent,
  CompanyContent,
} from "./components/contents";
import { gameData, utilityData } from "./data";
import { ThemeProvider } from "@mui/material";
import { basicTheme } from "./themes";
import "./App.css";

export const App = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Routes>
        <Route path="" element={<LayoutWithTopBarAndFooter />}>
          <Route index element={<MainContent />} />
          <Route
            path="games"
            element={<CardsContent pageTitle={"✨🎲 Here you can enjoy our games! 🎮🙌"} cardsData={gameData} />}
          />
          <Route path="utility" element={<CardsContent pageTitle={"💡🕰️ Utility 🧮📱"} cardsData={utilityData} />} />
          <Route path="blog" element={<BlogContent />} />
          <Route path="company" element={<CompanyContent />} />
          <Route path="privacy-policy" element={<PrivacyContent />} />
          <Route path="*" element={<ErrorContent emoji={"😶‍🌫️"} message={"This path doesn't exist."} />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
