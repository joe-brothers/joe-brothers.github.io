import { Container } from "@mui/material";
import { PercentageCard } from "./PercentageCard";

const percentageData = [
  {percentage: 75, text: 'Reduction in booking cancellations for a global ride sharing superapp'},
  {percentage: 33, text: 'Reduction in customer support calls for a leading on-demand food delivery app'},
  {percentage: 8, text: 'Increase in user retention for a leading international community site'},
];

export const PercentageCards = () => {
  return (
    <Container disableGutters
      style={{display: 'flex', gap: 20}}
      sx={{py: 5, flexDirection: {xs: 'column', sm: 'row'}}}
    >
      {percentageData.map((data) => <PercentageCard {...data}/>)}
    </Container>
  )
};