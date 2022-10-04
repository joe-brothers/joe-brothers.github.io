import { Container, SvgIconTypeMap } from "@mui/material";
import { AttachMoney, CurrencyBitcoin, CurrencyFranc, CurrencyPound, CurrencyYen, Euro } from "@mui/icons-material";
// eslint-disable-next-line
import { OverridableComponent } from "@mui/material/OverridableComponent";

const IconWithFontSize = (
  Icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, "svg">>,
  fontSize: number,
) => {
  return <Icon sx={{ fontSize }} />;
};

const logoComponents: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, "svg">>[] = [
  AttachMoney,
  Euro,
  CurrencyFranc,
  CurrencyPound,
  CurrencyYen,
  CurrencyBitcoin,
];

export const Logos = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", px: { xs: 2, sm: 3 } }}>
      {logoComponents.map((logo) => IconWithFontSize(logo, 50))}
    </Container>
  );
};
