import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductWithImage } from "./ProductWithImage";
import { openLinkInNewTab } from "../../../../utils";
import { links } from "../../../../data";

export const Products = () => {
  const navigate = useNavigate();

  return (
    <Container style={{ display: "flex", flexDirection: "column", gap: 80 }}>
      <ProductWithImage
        imageSrc="/assets/illustration3.png"
        productName="JOE'S GAMES"
        title="Fun, addictive games"
        explanation="Conquer the world with games"
        explanationDetails={[
          "Your time will disappear in the blink of an eye.",
          "Your time might disappear in less than a blink of an eye.",
        ]}
        linkText="See our games"
        onClickLink={() => navigate("/game")}
      />
      <ProductWithImage
        isImageLeft={true}
        imageSrc="/assets/illustration5.png"
        productName="JOE'S UTILITIES"
        title="Useful websites and mobile apps"
        explanation="From mini google docs to impermanent loss calculator."
        explanationDetails={["Make your life easier", "Simple and intuitive user interfaces"]}
        linkText="Look around our utility apps"
        onClickLink={() => navigate("/utility")}
      />
      <ProductWithImage
        imageSrc="/assets/illustration1.png"
        productName="JOE'S FUTURE"
        title="Making the progress"
        explanation="We are building things that would change all the aspects of the world."
        explanationDetails={[
          "We don't follow the rules to win. We make rules that we win.",
          "And.. we also run tech blog :)",
        ]}
        linkText="Check our tech blog"
        onClickLink={() => openLinkInNewTab(links.Blog)}
      />
    </Container>
  );
};
