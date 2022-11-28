import { Container } from "@mui/material";
import { PercentageCard } from "./PercentageCard";

const percentageData = [
  { percentage: 99, text: "Change that you will enjoy our games" },
  { percentage: 33, text: "Growth of quality of life after using our utilities" },
  { percentage: 1, text: "Our level of developing things" },
];

export const PercentageCards = () => {
  return (
    <Container style={{ display: "flex", gap: 20 }} sx={{ py: 5, flexDirection: { xs: "column", sm: "row" } }}>
      {percentageData.map((data) => (
        <PercentageCard key={`percent_${data.percentage}_${data.text.slice(0, 3)}`} {...data} />
      ))}
    </Container>
  );
};
