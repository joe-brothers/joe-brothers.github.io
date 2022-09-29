import { Container, SvgIconTypeMap } from '@mui/material';
import { AttachMoney, CurrencyBitcoin, CurrencyFranc, CurrencyPound, CurrencyYen, Euro } from '@mui/icons-material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

const IconWithFontSize = (Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>, fontSize: number) => {
  return <Icon sx={{ fontSize }} />;
};

const logoComponents: (OverridableComponent<SvgIconTypeMap<{}, "svg">>)[] = [
  AttachMoney,
  Euro,
  CurrencyFranc,
  CurrencyPound,
  CurrencyYen,
  CurrencyBitcoin
];

export const Logos = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {logoComponents.map((logo) => IconWithFontSize(logo, 50))}
    </Container>
  )
};