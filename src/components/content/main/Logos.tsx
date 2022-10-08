import { Container, SvgIconTypeMap } from "@mui/material";
import { Attractions, Celebration, Cloud, Extension, SmartToy, SportsEsports } from "@mui/icons-material";
// eslint-disable-next-line
import { OverridableComponent } from "@mui/material/OverridableComponent";

const IconWithFontSize = (
  Icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, "svg">>,
  fontSize: number,
) => {
  return <Icon sx={{ fontSize }} />;
};

const logoComponents: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, "svg">>[] = [
  Cloud,
  SportsEsports,
  Attractions,
  Celebration,
  Extension,
  SmartToy,
];

export const Logos = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", px: { xs: 2, sm: 3 } }}>
      {logoComponents.map((logo) => IconWithFontSize(logo, 50))}
    </Container>
  );
};
