import { Logos } from "./Logos";
import { Quotes } from "./Quotes";
import { Products } from "./Products";
import { CardWithButton } from "./CardWithButton";
import { PercentageCards } from "./PercentageCards";
import { TextWithButtonAndImage } from "./TextWithButtonAndImage";
import { LinkWithArrow } from "../../LinkWithArrow";
import { Container, Divider, Typography } from "@mui/material";

export const MainContent = () => {
  return (
    <Container disableGutters sx={{ pt: { xs: 11, md: 15 } }} style={{ maxWidth: "100%" }}>
      <TextWithButtonAndImage />
      <Container sx={{ py: 5 }}>
        <Divider />
      </Container>
      <Logos />
      <Container sx={{ py: 5 }}>
        <Divider />
      </Container>
      <Container style={{ textAlign: "center" }} sx={{ pt: 5, pb: 10 }}>
        <Typography variant="h3" align="center" mb={5}>
          Build experiences that drive engagement and increase transactions
        </Typography>
        <LinkWithArrow text="Watch a video" onClick={() => console.log("clicked")} />
      </Container>
      <Products />
      <PercentageCards />
      <Quotes />
      <Container sx={{ py: 5 }}>
        <CardWithButton
          textFirst="Ready for"
          textSecond="the next level?"
          textButtonFirst="Talk to Sales"
          textButtonSecond="Start a free trial"
        />
      </Container>
    </Container>
  );
};
